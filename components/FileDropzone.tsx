import {
  CircularProgress,
  colors,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Tooltip,
  Typography,
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import clsx from 'clsx'
import React, { useCallback, useEffect, useState, MouseEvent } from 'react'
import { useDropzone } from 'react-dropzone'
import { bytesToSize } from '../lib/bytesToSize'
import { uploadFile } from '../lib/uploadFile'

const useStyles = makeStyles((theme) => ({
  root: {},
  dropZone: {
    border: `1px dashed ${theme.palette.divider}`,
    padding: theme.spacing(6),
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: colors.grey[50],
      opacity: 0.5,
      cursor: 'pointer',
    },
  },
  dragActive: {
    backgroundColor: colors.grey[50],
    opacity: 0.5,
  },
  image: {
    width: 130,
  },
  info: {
    marginTop: theme.spacing(1),
  },
  actions: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}))

export interface DroppedFile {
  name: string
  size: string
  file: File
  uploading: boolean
  url?: string
}

function fileToDroppedFile(file: File): DroppedFile {
  return {
    name: file.name,
    size: bytesToSize(file.size),
    file,
    uploading: true,
  }
}

interface FilesDropzoneProps {
  filePath: string
  onChange: (urls: DroppedFile[]) => void
  multiFile?: boolean
  className?: string
  accept?: string
}

export function FilesDropzone({
  onChange,
  className,
  filePath,
  multiFile = true,
  accept,
}: FilesDropzoneProps) {
  const classes = useStyles()
  const [files, setFiles] = useState<DroppedFile[]>([])

  useEffect(() => {
    if (files.some(({ uploading }: DroppedFile) => uploading)) {
      return
    }
    onChange(files)
  }, [onChange, files])

  const handleDrop = useCallback(
    async (acceptedFiles) => {
      if (multiFile) {
        setFiles((prevFiles) =>
          [...prevFiles].concat(acceptedFiles.map(fileToDroppedFile)),
        )
      } else {
        setFiles(acceptedFiles.slice(-1).map(fileToDroppedFile))
      }
      await Promise.all(
        acceptedFiles.map(async (file: File) => {
          const url = await uploadFile(file, filePath, file.name)
          setFiles((files) =>
            files.map((uploadingFile: DroppedFile) => {
              if (uploadingFile.file === file) {
                console.log({
                  ...uploadingFile,
                  uploading: false,
                  url,
                })
                return {
                  ...uploadingFile,
                  uploading: false,
                  url,
                }
              } else {
                return uploadingFile
              }
            }),
          )
        }),
      )
    },
    [setFiles, filePath, multiFile],
  )

  const handleRemoveFile = useCallback(
    (file: DroppedFile) => (event: MouseEvent<HTMLButtonElement>) => {
      setFiles((files) =>
        files.filter(({ name }: DroppedFile) => name !== file.name),
      )
    },
    [setFiles],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept,
  })

  return (
    <div className={clsx(classes.root, className)}>
      <div
        className={clsx({
          [classes.dropZone]: true,
          [classes.dragActive]: isDragActive,
        })}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div>
          <img
            alt='Select file'
            className={classes.image}
            src='/images/undraw_add_file2_gvbb.svg'
          />
        </div>
        <div>
          <Typography gutterBottom variant='h3'>
            Select files
          </Typography>
          <Typography
            className={classes.info}
            color='textSecondary'
            variant='body1'
          >
            Drop files here or click to browse.
          </Typography>
        </div>
      </div>
      {files.length > 0 && (
        <List>
          {files.map((file, i) => (
            <ListItem divider={i < files.length - 1} key={i}>
              <ListItemIcon>
                <FileCopyIcon />
              </ListItemIcon>
              <ListItemText
                primary={file.name}
                primaryTypographyProps={{ variant: 'h5' }}
                secondary={file.size}
              />
              {file.uploading ? (
                <CircularProgress />
              ) : (
                <Tooltip title='Delete'>
                  <IconButton
                    edge='end'
                    aria-label='delete'
                    onClick={handleRemoveFile(file)}
                  >
                    <Delete fontSize='small' />
                  </IconButton>
                </Tooltip>
              )}
            </ListItem>
          ))}
        </List>
      )}
    </div>
  )
}
