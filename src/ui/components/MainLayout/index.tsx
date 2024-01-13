import Header from './components/Header';
import PhotosTable from './components/PhotosTable';
import { PhotosTableProvider } from './components/PhotosTable/context/PhotosTableContext';

const MainLayout: React.FC = () => {
  return (
    <div className="container mx-auto py-4">
      <Header />
      <div className="divider divider-primary" />
      <PhotosTableProvider>
        <PhotosTable />
      </PhotosTableProvider>
    </div>
  );
};

export default MainLayout;
