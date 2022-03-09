import React from 'react'

const sendinfo = (e) => {
    e.preventDefault()
    console.log("Hello")
}
export const Form = () => {
    return (
        <div className='form-container'>
            <form className='form' onSubmit={sendinfo}>
                <div className='form-section'>
                    <div className='form-element'>
                        <label>Nombre</label>
                        <input placeholder='Inserta tu nombre' name="Name" type="text" />
                    </div>
                    <div className='form-element'>
                        <label>Apellido</label>
                        <input placeholder='Inserta tu Apellido' name="LastName" type="text" />
                    </div>
                </div>

                <div className='form-section'>
                    <div className='form-element'>
                        <label>Email</label>
                        <input placeholder='Escribe tu Correo' name="Email" type="email" />
                    </div>
                    <div className='form-element'>
                        <label>Celular</label>
                        <input placeholder='Escribe tu direccion' name="Phone" type="number" />
                    </div>
                </div>

                <div className='textarea form-section'>
                    <textarea placeholder='Escribe tu Mensaje' />
                </div>

              
                <button className='btn btn-primary' type='submit'>Enviar</button>
            </form>
        </div>
    )
}
