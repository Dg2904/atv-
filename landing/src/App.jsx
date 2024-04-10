import './App.css';
import Menu from './components/Menu';

export default function App() {
    return (
        <div className="wrap-principal"> 
            <Menu/>
            <div className="div_position_home">
                <h1 className="text-center">Bem vindo a página de aprendizado!</h1>
            </div>
        </div>
    );
}