import Header from './components/Header';
import AlbumsTable from './components/AlbumsTable';
import { AlbumsTableProvider } from './components/AlbumsTable/context/AlbumsTableContext';

const MainLayout: React.FC = () => {
  return (
    <div className="container mx-auto py-4">
      <Header />
      <div className="divider divider-primary" />
      <AlbumsTableProvider>
        <AlbumsTable />
      </AlbumsTableProvider>
    </div>
  );
};

export default MainLayout;
