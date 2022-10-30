import Dark from "./Dark";
export default function Welcome(props) {
  return (
    <div className="con-welcome width">
      <Dark
        isDark={props.isDark}
        handleDark={props.handleDark}
      />
      <h1>Quizzical</h1>
      <p>
        Quizzical is an app that helps you improve your trivial knowledge for a
        god-knows reason
      </p>
      <button
        className="button--normal font-weight--bold"
        onClick={props.startFunc}
      >
        start Quiz
      </button>
    </div>
  );
}
