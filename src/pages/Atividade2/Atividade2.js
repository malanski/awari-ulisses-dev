import '../../assets/scss/Atividade2.scss';
import github from '../../assets/images/image2.png'

export const Atividade2 = (props) => {
    return (
        <div className='atividade2'>
            <h1>Create Portfolio</h1>

            <h2>Github Profile Readme</h2>
            <a href="https://github.com/malanski/malanski">
                <img src={github} alt='Github Readme Repository'
                    title='Github Readme Repository'/>
            </a>
        </div>
    )
}