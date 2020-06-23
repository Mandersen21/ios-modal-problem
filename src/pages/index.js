import React, { useState } from "react"
import { GlobalStyles, Button } from "@dfds-ui/react-components"
import {
  Modal,
  ModalDialog,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@dfds-ui/modal"
import Layout from "../components/layout"

const IndexPage = () => {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)

  return (
    <Layout>
      <Button onClick={() => setOpen(!open)}>Open standard modal</Button>
      <Button variation="secondary" onClick={() => setOpen2(!open2)}>
        Open dialog modal
      </Button>
      <Modal
        fixedTopPosition={true}
        heading="Standard modal"
        sizes={{
          s: "fullscreen",
          m: "fullscreen",
          l: "fullscreen",
          xl: "fullscreen",
          xxl: "fullscreen",
        }}
        isOpen={open}
        onRequestClose={() => setOpen(!open)}
      />

      <ModalDialog
        sizes={{
          s: "fullscreen",
          m: "fullscreen",
          l: "fullscreen",
          xl: "fullscreen",
          xxl: "fullscreen",
        }}
        isOpen={open2}
        onRequestClose={() => setOpen2(!open2)}
      >
        <ModalHeader>Modal dialog version</ModalHeader>
        <ModalBody
          style={{
            flexGrow: 1,
          }}
        >
          <div className="box">Box</div>
          <div className="box">Box</div>
          <div className="box">Box</div>
          <div className="box">Box</div>
          <div className="box">Box</div>
          <div className="box">Box</div>
          <div className="box">Box</div>
          <div className="box">Box</div>
          <div className="box">Box</div>
          <div className="box">Box</div>
          <div className="box">Box</div>
          <div className="box">Box</div>
          <div className="box">Box</div>
          <div className="box">Box</div>
          <div className="box">Box</div>
          <div className="box">Box</div>
          <div className="box">Box</div>
          <div className="box">Box</div>
        </ModalBody>
        <ModalFooter sticky={true}>
          <Button
            onClick={() => setOpen2(!open2)}
            css={{ width: "100%", height: "50px" }}
          >
            Close modal
          </Button>
        </ModalFooter>
      </ModalDialog>
    </Layout>
  )
}

export default IndexPage
