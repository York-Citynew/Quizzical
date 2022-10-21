export default function Dark(props) {
    return (
        <button onClick={props.handleDark} className="button--dark circular">
            <span className="button--dark--icon absolute--top--0 left">
                <ion-icon  name="moon-outline"></ion-icon>
            </span>
            <span className="button--dark--icon absolute--top--0 right">
                <ion-icon name="sunny-outline"></ion-icon>
            </span>
            <span 
                className=
                    {`dot circular absolute--top--0 ${!props.isDark && "dot--right"}`}></span>
        </button>
    )
}