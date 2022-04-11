import '../../assets/scss/Atividade1.scss';
import printSite from '../../assets/images/image.png'

export const Atividade1 = (props) => {
    return (
        <div className='atividade1'>
            <h1>1# Observar e Relatar</h1>
            <p> Selecione seu site preferido da internet – 
                sem julgamentos e tire uma screenshot da principal forma que você o utiliza.
            </p>
            <img className="print-site"
                src={printSite}
                alt="youtube print"/>
            <ul>
                <li>
                    Qual é a forma que você costuma acessar este site? 
                    Desktop, celular, tablet? Em qual sistema operacional? 
                    Em qual navegador?<br/>
                    <span>R: Descktop e LapTop Geralmente usando Google Chrome e Mozilla.</span>
                </li>

                <li>
                    Este site possui um aplicativo que você pode baixar? 
                    Você utiliza o app?<br/>
                    <span>R: Sim, o aplicativo mobile do Youtube é muito mais dinamico do que usa-lo no navegador do Celular.</span>
                </li>

                <li>
                    Qual a funcionalidade predileta deste site?<br/>
                    <span>R: As recomendações de vídeos, e a seção de comentários.</span>
                </li>

                <li>
                    Qual é a sua percepção de velocidade? Carrega rápido?<br/>
                    <span>R: É muito rapido pra um site tão carregado.</span>
                </li>

                <li>
                    Tente acessar este site de formas diferentes do habitual. 
                    Em outros navegadores, etc. Há alguma diferença?<br/>
                    <span>R: De um Mozilla para um Google Chrome as proporções vairam em alguns formatos</span>
                </li>

                <li>
                    Clique com o botão direito do mouse no Desktop acessando esse 
                    site e selecione a opção de exibir o código-fonte. Dê uma olhada e responda: 
                    Você consegue entender algo? Ou está tudo "bagunçado"?<br/>
                    <span>R: O codigo esta bagunçado, sem indentação.</span>

                </li>

                <li>
                    Se você usar apenas tab e não usar o mouse, você consegue navegar nesse site? 
                    Consegue acessar um link ao clicar em enter?<br/>
                    <span>R: Sim, é possivel acessar cada link e botão navegando com Tab.</span>
                </li>

                <li>
                    Você se lembra deste site ter ficado indisponível em algum momento?<br/>
                    <span>R: Só na época que só tinha video de 10min e a internet era mais lenta.</span>
                </li>

                <li>
                    Aproveite para indicar um site que você se lembra de algum desprazer ou que teve uma 
                    experiêcia ruim. Qual foi e por quê?<br/>
                    <span>R: Sites de Imobiliária eram ruins em 2014, pois o mecanismo de pesquisa não obedecia os parâmetros. 
                        Sem falar nos Span, propagandas e mensagens que apareciam o tempo todo antes do AD Block.
                    </span>
                </li>
            </ul>
        </div>
    )
}