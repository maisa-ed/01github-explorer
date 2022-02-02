import { Counter } from './components/counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App() {
    return (
        <div>
        <RepositoryList />
        <Counter />
        </div>
    )
}