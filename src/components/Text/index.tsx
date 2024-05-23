import React from 'react'
import './style.css'

interface TextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    text: string;
    variant?: 'Titulo1' | 'Titulo2' | 'Titulo3' | 'label' | 'p';
}


const Text = ({text, variant="p", ...res}: TextProps) => {
    
    const handleClassName = {
        Titulo1: "text_titulo1",
        Titulo2: "text_titulo2",
        Titulo3: "text_titulo3",
        label: "text_label",
        p: "text_p",
        a: "text_a"
    }

  return (
    <p className={handleClassName[variant]} {...res}>
        {text}
    </p>
  )
}

export default Text