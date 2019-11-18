import * as React from 'react'
import { observer, inject } from 'mobx-react'

const amazonS3Path = 'https://s3-ap-northeast-1.amazonaws.com/'
const bucketName = 'jhliou.mediawindow'
const fileNameList = ['baby1', 'baby2', 'baby3', 'baby4', 'baby5']
const imgPathList = fileNameList.map(filename => `${amazonS3Path}${bucketName}/${filename}.jpg`)

const constraints = {
  audio: true,
  video: true
}

export default inject('rootStore')(observer((props) => {
  const goCamera = async () => {
    try {
      const videoPlayer: HTMLVideoElement | null = document.querySelector('video#video-player')
      const stream = await navigator.mediaDevices.getUserMedia(constraints)

      if (videoPlayer)
      videoPlayer.srcObject = stream
    } catch (errMsg) {
      console.error(errMsg)
    }
  }

  return (
    <>
      <video id='video-player' width='250px' height='400px' controls autoPlay ></video>
      <span onClick={goCamera}>點我</span>
      <video width='250px' controls autoPlay>
        <source src='./audio/妹妹寶寶.mp4' type="video/mp4" />
      </video>
      {imgPathList.map((imgPath, idx) => <img key={idx} src={imgPath} width='250px' />)}
    </>
  )
}))
