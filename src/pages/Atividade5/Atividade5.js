import '../../assets/scss/Atividade3.scss';
import atividade5 from '../../assets/images/image5.png';



export const Atividade5 = (props) => {
    return (
        <div className='atividade3'>
            <h1>Criar uma página usando apenas HTML + CSS</h1>
            <a href='https://malanski.github.io/ulisses-malanski-art/index.html'>
                <img src={atividade5}/>
            </a>
            

            <h2>Objetivos</h2>
            <ul>
                <li>
                    Apenas HTML e CSS!
                </li>
                
                <li>
                    Utilizar ao menos 30 elementos do HTML.
                </li>

                <li>
                    Utilizar .classes e #ids, da forma correta.
                </li>

                <li>
                    Deve ter algumas imagens.
                </li>

                <li>
                    Deve ter ao menos um embed do YouTube em algum lugar da página.
                </li>

                <li>
                    Deve ser responsivo. Ao menos uma versão mobile e uma versão desktop.
                </li>

                <li>
                    O código precisa estar no GitHub. 
                    <a href='https://github.com/malanski/ulisses-malanski-art'> Repositório</a>
                </li>

                <li>
                    Criar versões para os breakpoints mais importantes. O Next.js sugere: 640, 750, 828, 1080, 1200, 1920, 2048, 3840.
                </li>

                <li>
                    Garantir um HTML 100% válido pela W3C= Document checking completed. No errors or warnings to show.
                </li>
            </ul>
            
        </div>
    )
}