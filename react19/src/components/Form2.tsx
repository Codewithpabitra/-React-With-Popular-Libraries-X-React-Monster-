import FormButton from './FormButton'

const Form2 = () => {

    const myAction = async (formData : any) => {
        await new Promise(resolve => setTimeout(resolve, 2000))

        const newPost = {
            name : formData.get("name"),
            email : formData.get("email")
        };

        console.log(newPost)
    }

  return (
    <form action={myAction}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' name='name' placeholder='Name' required />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' name='email' placeholder='Email' required />
      </div>

      <FormButton />
    </form>
  )
}

export default Form2
