import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, LinearProgress } from '@mui/material';
import { useEffect } from 'react';
import { employeeUseCase } from '@/app/modules/employees/use-cases/GetAll';
import { GetAllEmployeeDto } from '@/app/modules/employees/use-cases/GetAll/GetAllEmployeesDto';

const StyledTableCell = styled(TableCell)(({ theme }) => ({

  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#0500FF',
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function AppTable({ searchTerm }: { searchTerm: string }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [rows, setRows] = React.useState<GetAllEmployeeDto.Employee[]>([]);

  useEffect(() => {
    const fetchData = async () => {

      setIsLoading(true);
      const res = await employeeUseCase.execute(undefined);
      setIsLoading(false);
      if (res.isRight()) {
        const value = res.value.getValue();
        const data: GetAllEmployeeDto.Employee[] = value.employees;
        setRows(data);
      }
    };
    fetchData();
  }, []);

  const normalizeString = (str: string) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase();
  };

  const normalizedSearchTerm = normalizeString(searchTerm);

  const filteredRows = rows
    .map(
      (employee) => ({
        name: employee.name,
        role: employee.job,
        date: employee.admission_date,
        phone: employee.phone, image: employee.image
      })
    )
    .filter(
      (row) =>
        normalizeString(row.name).includes(normalizedSearchTerm) || 
        normalizeString(row.role).includes(normalizedSearchTerm) || 
        normalizeString(row.phone).includes(normalizedSearchTerm)
    );


  return (
    <TableContainer component={Paper} sx={{ borderRadius: '8px' }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">FOTO</StyledTableCell>
            <StyledTableCell align="center">NOME</StyledTableCell>
            <StyledTableCell align="center">CARGO</StyledTableCell>
            <StyledTableCell align="center">DATA DE ADMISSÃO</StyledTableCell>
            <StyledTableCell align="center">TELEFONE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {isLoading ? 
          (
            <StyledTableRow>
              <StyledTableCell colSpan={5} align="center">
                <LinearProgress />
              </StyledTableCell>
            </StyledTableRow>
          ): filteredRows.length === 0 ? (
            <StyledTableRow>
              <StyledTableCell colSpan={5} align="center">
                Nenhum funcionário encontrado
              </StyledTableCell>
            </StyledTableRow>
          ) : (
            filteredRows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Avatar alt="Remy Sharp" src={row.image} />
                </StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.role}</StyledTableCell>
                <StyledTableCell align="center">{row.date}</StyledTableCell>
                <StyledTableCell align="center">{row.phone}</StyledTableCell>
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
