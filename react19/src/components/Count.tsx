import { useActionState } from "react"

async function increment(previousState, formData) {
    console.log(formData.get("name"))
    return previousState + 1;
}

const Count = () => {
    const [state, formAction] = useActionState(increment, 0);


  return (
    <form>
      <h1>{state}</h1>

      <button formAction={formAction}>increment</button>

      <br />

      <input type="text" placeholder="please enter your name" name="name"  />
    </form>
  )
}

export default Count
