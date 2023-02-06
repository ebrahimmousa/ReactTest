export const First = () => {
    let x = 17;
    const changeNumber = () => {
        x = 100;
    }

    return (<div onChange={changeNumber}>
        {x}  {/* interpolation */}
    </div>);
}