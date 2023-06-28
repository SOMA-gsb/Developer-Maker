import Button from "./Button";

function Buttons() {
    const infos = [
        {name: "추천문제", id: "recommend-select-button"},
        {name: "힌트", id: "hint-select-button"},
        {name: "타이머", id: "gsb-select-button"},
    ];

    return (
        <>
            {infos.map((info) => <Button name={info.name} id={info.id} />)}
        </>
    );
}

export default Buttons;