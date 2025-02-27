import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, Avatar } from '@mui/material';

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

function createData(name: string, role: string, date: string, phone: string) {
  return { name, role, date, phone };
}

const rows = [
  createData("Ana Souza", "Designer", "10/02/2020", "11 9999-9999"),
  createData("Carlos Lima", "Desenvolvedor", "15/07/2019", "21 9888-8888"),
  createData("Bruna Costa", "Analista", "03/09/2021", "31 9777-7777"),
  createData("Diego Alves", "Gerente", "22/05/2018", "41 9666-6666"),
];

export default function AppTable({ searchTerm }: { searchTerm: string }) {
  
  const filteredRows = rows.filter((row) => 
    {
      if(searchTerm === null || searchTerm === '') return row
      return row.name.toLowerCase().includes(searchTerm.toLowerCase()) // 🔥 Filtrando os nomes
    }
  );
  return (
    <TableContainer component={Paper} sx={{ borderRadius: '8px' }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>FOTO</StyledTableCell>
            <StyledTableCell align="center">NOME</StyledTableCell>
            <StyledTableCell align="center">CARGO</StyledTableCell>
            <StyledTableCell align="center">DATA DE ADMISSÃO</StyledTableCell>
            <StyledTableCell align="center">TELEFONE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          
          {filteredRows.length === 0 ? (
            <StyledTableRow>
              <StyledTableCell colSpan={5} align="center">
                Nenhum funcionário encontrado
              </StyledTableCell>
            </StyledTableRow>
          ) : (
            filteredRows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <Avatar alt="Remy Sharp" src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg" />
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
