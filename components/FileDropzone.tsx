import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useDropzone } from 'react-dropzone'
import {
  Button,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Tooltip,
  colors,
  makeStyles,
  CircularProgress,
} from '@material-ui/core'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import MoreIcon from '@material-ui/icons/MoreVert'
import { bytesToSize } from '../lib/bytesToSize'
import { uploadFile } from '../lib/uploadFile'
import { Delete } from '@material-ui/icons'

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

interface FilesDropzoneProps {
  filePath: string
  onChange: (urls: string[]) => void
  className?: string
}

interface UploadingFile {
  name: string
  size: string
  file: File
  uploading: boolean
  url?: string
}

function FilesDropzone({ onChange, className, filePath }: FilesDropzoneProps) {
  const classes = useStyles()
  const [files, setFiles] = useState<UploadingFile[]>([])

  useEffect(() => {
    if (files.some(({ uploading }: UploadingFile) => uploading)) {
      return
    }
    onChange(files.map(({ url }: UploadingFile) => url!))
  }, [onChange, files])

  const handleDrop = useCallback(
    async (acceptedFiles) => {
      setFiles((prevFiles) =>
        [...prevFiles].concat(
          acceptedFiles.map((file: File) => ({
            name: file.name,
            size: bytesToSize(file.size),
            file,
            uploading: true,
          })),
        ),
      )
      await Promise.all(
        acceptedFiles.map(async (file: File) => {
          const url = await uploadFile(file, filePath, file.name)
          setFiles((files) =>
            files.map((uploadingFile: UploadingFile) => {
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
    [setFiles, filePath],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
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
            Drop files here or click <Link underline='always'>browse</Link>{' '}
            thorough your machine
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
                  <IconButton edge='end'>
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

FilesDropzone.propTypes = {
  className: PropTypes.string,
}

export default FilesDropzone
