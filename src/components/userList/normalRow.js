
function NormalRow({ element, UserData,index }) {

    let elem = UserData[element];
    let txt = elem === "lessoneyear" ? "کمتر ازیک سال" : elem === "betweenoneandtwoyear" ? "بین یک تا دو سال" : "بیشتر از دو سال";

    return (
        <>
            {
            element === "workExperience" ? <td key={index} className="py-2 px-4">{txt}</td> :
             <td className="py-2 px-4" key={index}>{UserData[element]}</td>}
        </>
    )
}

export default NormalRow