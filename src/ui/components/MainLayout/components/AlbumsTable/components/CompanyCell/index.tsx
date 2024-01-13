import { type ICompany } from '@/domain/models/ICompany';

interface CompanyCellProps {
  company: ICompany;
}

const CompanyCell: React.FC<CompanyCellProps> = ({ company }) => {
  const capitalizedBS = company.bs.charAt(0).toUpperCase() + company.bs.slice(1);

  return (
    <>
      <span>{company.name}.</span> <span>{capitalizedBS}</span>
      <br />
      <span className="badge badge-ghost badge-sm">{company.catchPhrase}</span>
    </>
  );
};

export default CompanyCell;
