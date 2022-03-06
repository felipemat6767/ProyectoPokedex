import React from 'react'

export const Form = () => {
    return (
        <div>
            <form>
                <div>
                    <div>
                        <label>Nombre</label>
                        <input placeholder='Inserta tu nombre' name="Name" type="text" />
                    </div>
                    <div>
                        <label>Apellido</label>
                        <input placeholder='Inserta tu Apellido' name="LastName" type="text" />
                    </div>
                </div>
                
                <div>
                    <div>
                        <label>Email</label>
                        <input placeholder='Escribe tu Correo' name="Email" type="email" />
                    </div>
                    <div>
                        <label>Celular</label>
                        <input placeholder='Escribe tu direccion' name="Phone" type="number" />
                    </div>
                </div>
                
                <div>
                    <textarea />
                </div>
            </form>

        </div>
    )
}
