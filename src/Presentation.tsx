import {
  ArrowControls,
  Astonish,
  FullScreen,
  Preview,
  Slide,
  SlideNumber,
} from "astonish";

function Presentation() {
  return (
    <Astonish
      slideSx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        fontFamily: "Arial, Helvetica, Ubuntu, sans-serif",
      }}
    >
      <Slide>
        <h1>Hello There!</h1>
      </Slide>

      <Slide>
        <p>
          You are creating a presentation with React. As a developer, you can
          now do whatever you want 🥳
        </p>

        <div>
          Visit Astonish API Docs:{" "}
          <a href="https://github.com/fayez-nazzal/astonish/wiki" target="_blank" rel="noreferrer">
            Our Github Wiki Page
          </a>
        </div>
      </Slide>

      <Preview />
      <ArrowControls />
      <SlideNumber position="top-right" />
      <FullScreen />
    </Astonish>
  );
}

export default Presentation;
