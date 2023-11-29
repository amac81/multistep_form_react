import React from 'react'

const UserForm = () => {
  return (
    <div className="form-control">
      <div className="form-input">
        <label htmlFor="name">Nome:</label>
        <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder='Digite o seu nome'
            required
        />
      </div>
      <div className="form-input">
        <label htmlFor="email">Email:</label>
        <input 
            type="email" 
            name="email" 
            id="email"
            autoCapitalize="off" 
            spellCheck="false" 
            autoComplete="on"
            inputMode="email"
            placeholder='Digite o seu email'
            required
        />
      </div>
    </div>
  )
}

export default UserForm