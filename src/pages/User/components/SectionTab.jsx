import { Tab, Tabs } from "react-bootstrap"

export const SectionTab = ({user}) => {
  return (
    <>
      <Tabs variant="pills" defaultActiveKey="publicaciones" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="publicaciones" title="Publicaciones">
          Publicaciones
        </Tab>
        {
          user.type === "Guide" &&
          <Tab eventKey="reviews" title="Reviews">
            Reviews
          </Tab>
        }
      </Tabs>
    </>
  )
}