import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const SearchInput = styled(TextField)({
  backgroundColor: "#f5f5f5", // Cor do fundo parecida com a da imagem
  borderRadius: "8px",
  "& .MuiOutlinedInput-root": {
    height: "48px",
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "#ccc",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ccc",
    },
  },
});

export default function InputSearch({ onSearch }: { onSearch: (value: string) => void }) {
  return (
    <SearchInput
      variant="outlined"
      placeholder="Pesquisar"
      fullWidth
      onChange={(e) => onSearch(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon style={{ color: "#ccc" }} />
          </InputAdornment>
        ),
      }}
    />
  );
}
