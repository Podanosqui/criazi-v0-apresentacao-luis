import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Stack, useMediaQuery } from '@mui/material';
import SideBar from '../components/Sidebar';

import Login from '../pages/loginPage/Login';
import EsqueciSenha from '../pages/loginPage/EsqueciSenha';
import RecuperarSenha from '../pages/loginPage/RecuperarSenha';
import HomeContent from '../pages/homePage/HomeContent';
import ProfessoresContent from '../pages/professores/ProfessoresContent';
import TurmasContent from '../pages/turmas/TurmasContent';
import ErpContent from '../pages/homePage/ErpContent';
import CadastrarProfessor from '../pages/professores/CadastrarProfessor';
import SeriesTurmas from '../pages/turmas/SeriesTurmas';
import MinhaConta from '../pages/minhaConta/MinhaConta';
import CadastrarAlunos from '../pages/turmas/CadastrarAlunos';
import ResumoAluno from '../pages/turmas/ResumoAluno';
import CadastrarTurma from '../pages/turmas/CadastrarTurma';
import Chamadas from '../pages/turmas/Chamadas';

import Faltas from '../pages/turmas/Faltas';



const AppRoutes: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:900px)');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/esqueci-senha" element={<EsqueciSenha />} />
        <Route path="/redefinir-senha" element={<RecuperarSenha />} />

        {isAuthenticated ? (
          <Route
            path="*"
            element={
              <Stack direction={isMobile ? "column" : "row"}>
                <SideBar />
                <Stack width={isMobile ? "100%" : "calc(100% - 280px)"} ml={isMobile ? "" : "280px"} p="1rem">
                  <Routes>
                    <Route path="/home" element={<HomeContent />} />
                    <Route path="professores/cadastrarprofessor" element={<CadastrarProfessor />} />
                    <Route path="/professores" element={<ProfessoresContent />} />
                    <Route path="/turmas" element={<TurmasContent />} />
                    <Route path="/cadastrar-alunos" element={<CadastrarAlunos />} />
                    <Route path="/cadastrar-turma" element={<CadastrarTurma />} />
                    <Route path="/resumo-aluno" element={<ResumoAluno />} />
                    <Route path="/erp" element={<ErpContent />} />
                    <Route path="/seriesturmas" element={<SeriesTurmas />} />
                    <Route path="/chamadas" element={<Chamadas />} />
                    
                    <Route path="/minhaconta" element={<MinhaConta />} />
                    <Route path="/faltas" element={<Faltas />} />
                  </Routes>
                </Stack>
              </Stack>
            }
          />
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
