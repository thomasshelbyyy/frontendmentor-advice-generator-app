const fetchData = async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
    if (!response.ok) {
        alert("oops something went wrong")
        return
    }
    const data = await response.json()
    return data.slip
}


const btn = document.querySelector("#btn")
const number = document.querySelector("#number")
const adviceBody = document.querySelector("#advice")

btn.addEventListener("click", async function () {
    try {
        const data = await fetchData()
        number.innerText = data.id
        adviceBody.innerText = data.advice
    } catch (error) {
        console.log(error)
    }
})