import React from 'react';
import { Box, Typography, Card, CardActionArea, CardContent, Icon, Stack, Tabs, Tab, TextField, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Link } from 'react-router-dom';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import Caderno from '../../images/caderno.svg';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { format } from 'date-fns';
import ForumIcon from '@mui/icons-material/Forum';
import logo from '../../images/Ellipse 2.svg'



interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  sx?: object;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, sx, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, ...sx }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `scrollable-tab-${index}`,
    'aria-controls': `scrollable-tabpanel-${index}`,
  };
}

const HomeContent: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    return format(currentDate, 'dd/MM/yyyy');
  };

  // a const deve ser criada aqui, peguei todo o conteudo da stack que contem o background red e passe para cá.



  const cardData = [
    { icon: <DesignServicesOutlinedIcon sx={{ color: "#B82900", fontSize: "40px" }} />, title: 'Turmas', description: 'Notas, chamadas, ocorrências e controle administrativo das turmas.', link: '/turmas' },
    { icon: <GroupsOutlinedIcon sx={{ color: "#B82900", fontSize: "40px" }} />, title: 'Professores', description: 'Edite os professores cadastrados, crie módulos e adicione novos professores.', link: '/professores' },
    { icon: <AttachMoneyOutlinedIcon sx={{ color: "#007A68", fontSize: "40px" }} />, title: 'ERP', description: 'Edite os ERP cadastrados, crie módulos e adicione novos ERP.', link: '/erp' }
  ];

  const cardColors = ['#FEECE7', '#FFE3E3', '#EEFFFD'];

  return (
    <Stack sx={{maxWidth:"100%"}}>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <HomeOutlinedIcon sx={{ color: "#B82900" }} />
          <Typography color='#422107' fontWeight='bold' variant='h6'>Home</Typography>
        </Box>

        <Box sx={{ display:{ md:"flex", sm:"none"}, alignItems: "center", justifyContent: "space-around", gap: "20px" }}>
          <NotificationsNoneOutlinedIcon sx={{ width: "40px", fontSize: "40px" }} />
          <Box sx={{ display: "flex", justifyContent: "space-around", p: "10px", background: "#F0F0F0", borderRadius: "12px", width: "200px",m:"10px" }}>
            <img src={logo} alt="" style={{ width: '40px' }} />
            <Stack>
              <Box color='#0B0B0B'>Luiz Henrique</Box>
              <Link to="/minhaconta" style={{
                padding: '0', marginTop: "5px", justifyContent: "flex-start", color: "#FF7224", borderRadius: "0",
              }}>
                Ver perfil
              </Link>
            </Stack>
          </Box>
        </Box>
      </Stack>

      <Stack sx={{display:"flex", flexDirection:{lg:"row",md:"column"}}}>

        <Stack>
          <Stack my={2}>
            <Stack justifyContent="center" alignItems="center">
              <Stack justifyContent="flex-start" width="100%" direction="row" alignItems="center">
                <Box sx={{ display: 'flex', pl: "15px", py: '4px', gap: '10px', border: '1px solid #461500', borderRadius: '8px 8px 0 0' }}>
                  <img src={Caderno} alt="" style={{ width: '23px' }} />
                  <Typography width="100px" fontWeight="bold" color='#461500'>Lousa</Typography>
                </Box>
              </Stack>
              <TextField
                multiline
                rows={8}
                variant="outlined"
                fullWidth
                sx={{
                  border: "11px solid #B1A099",
                  borderRadius: '0 0 8px 8px',
                  mt: '-1px',
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent"
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent"
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent"
                    }
                  }
                }}
              />
            </Stack>
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '1rem', gap: 2, flexDirection: { xs: "column", md: "row" } }}>
            {cardData.map((card, index) => (
              <Card key={index} sx={{ flexGrow: 1, maxWidth: { xs: '100%', md: '32%' }, flexWrap: { xs: 'wrap', md: "nowrap" }, background: cardColors[index % cardColors.length] }}>
                <CardActionArea component={Link} to={card.link}>
                  <CardContent>
                    <Icon sx={{ mb: 1, fontSize: "40px" }}>{card.icon}</Icon>
                    <Typography variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Stack>

{/* aqui vc deve puxar os dados da const criada la em cima para este local. */}
        <Stack sx={{flexDirection:{md:'row',lg:"column"}}}>


          <Accordion elevation={0} sx={{ml:{md:"10px",sm:"0px"},borderRadius: "8px", p: '10px', border: "none",mt:"10px", maxWidth:{sm:"100%",md:"45%",lg:"100%"} }}>

            <AccordionSummary sx={{px: "5px", mt: "15px", background: "#FFE8DC", borderRadius: "8px 8px 0 0" }}>


              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:"space-around", width:"100%" }}>
                <CalendarTodayIcon sx={{ mr: '0.5rem', color: "#FF7224" }} />
                <Typography variant="body2" color='#FF7224'>Data Atual: {getCurrentDate()}</Typography>
              <Button variant="contained" color="primary" sx={{
                background: "#FF7224",
                boxShadow: "0", fontSize: "12px", ml: "20px",
                '&:hover': { background: "#FF7224", transition: "0.1s", border: "1px solid #FFBD99", }
              }}>Calendário</Button>
              </Box>

            </AccordionSummary>

            <AccordionDetails sx={{ background: "#FFE8DC", borderRadius: " 0 0 8px 8px" }}>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  sx={{
                    width: { xs: '230px', sm: '300px', md: '220px',lg:"100%" },
                    border: '1px solid orange',
                    borderRadius: '8px',
                    backgroundColor: '#f9f9f9',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    '& .MuiPickersDay-dayWithMargin': {
                      color: '#1976d2',  // Cor do texto dos dias
                    },
                    '& .MuiPickersDay-today': {
                      backgroundColor: 'orange',  // Cor de fundo do dia atual
                    },
                    '& .MuiPickersDay-selected': {
                      backgroundColor: '#4caf50',  // Cor de fundo do dia selecionado
                      color: '#fff',  // Cor do texto do dia selecionado
                    }
                  }}
                />
              </LocalizationProvider>
              <Box sx={{ background: '#FF7224', py: "10px", borderRadius: "8px", mt: "10px", pl: "10px" }}>
                <Typography color='white' >Próximos eventos.</Typography>
                <TextField variant="outlined" placeholder='não há próximos eventos agendados.' sx={{ background: "white", width: '93%' }} />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={0} sx={{ ml:{md:"10px",sm:"0px"}, borderRadius: "8px", p: '10px', border: "none",mt:"10px", maxWidth:{sm:"100%",md:"45%",lg:"100%"} }}>
            <AccordionSummary sx={{px: "5px", mt: "15px", background: "#FFF7DC", borderRadius: "8px 8px 0 0" }}>
              <Box sx={{ display: "flex", alignItems: "center",justifyContent:"space-around",width:"100%" }}>
                <ForumIcon sx={{ background: "#FFA724", color: "white", borderRadius: "50%", width: '30px', height: '30px', p: "5px" }} />
                <Typography color='#FFA724'>Mensagem</Typography>
                <Typography sx={{
                  p: "10px", background: "#FFA724", boxShadow: "0", fontSize: "12px", ml: "20px", borderRadius: '8px',
                  '&:hover': { background: "#FFA724", transition: "0.s", border: "1px solid #FFBD99", }
                }}>Mensagem</Typography>
              </Box>
            </AccordionSummary>

            <AccordionDetails sx={{ background: "#FFF7DC" }}>
              <Box sx={{ background: '#FFA724', py: "10px", borderRadius: "8px", mt: "10px", pl: "10px" }}>
                <Typography color='white' >Mensagem</Typography>

                <Typography sx={{ background: "white", color: "#BCBCBC", m: "10px", p: "5px" }}>não há novas mensagens recebidas.</Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>


      <Stack>
        <Typography variant='h5' fontWeight="600" sx={{ mb: "20px", mt: "1rem" }}>Editadas recentemente</Typography>

        <Stack direction="row" alignItems="center">
          <Box id="scrollable-tabs-container" sx={{ overflowX: 'auto', whiteSpace: 'nowrap', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="scrollable tabs example"
              variant="scrollable"
              scrollButtons="auto"
              textColor="inherit"
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: 'transparent'
                },
                '& .Mui-selected': {
                  color: '#fff',
                  background: "#FF8847",
                  borderRadius: "8px",
                },
                '& .MuiTab-root': {
                  fontSize: { xs: '12px', md: "14px" },
                  padding: { xs: '2px', md: "10px" }
                }
              }}
            >
              <Tab label="Geral" {...a11yProps(0)} />
              <Tab label="Chamadas" {...a11yProps(1)} />
              <Tab label="Ocorrências" {...a11yProps(2)} />
              <Tab label="Notas" {...a11yProps(3)} />
            </Tabs>
          </Box>
        </Stack>
        <CustomTabPanel value={value} index={0} sx={{ mt: "20px", p: "0" }}>
          <Stack spacing={2}>
            {[
              { to: "/path1", icon: <ReceiptLongIcon sx={{ color: "#2D74FF", background: "#EDF3FF", borderRadius: "50%", width: '40px', height: "40px", p: '10px', mr: "10px" }} />, label: "Nota", text: "5° ano A" },
              { to: "/path2", icon: <PriorityHighIcon sx={{ color: "#DE2D2D", background: "#FFE9E9", borderRadius: "50%", width: '40px', height: "40px", p: '10px', mr: "10px" }} />, label: "Ocorrencia", text: "5° ano A" },
              { to: "/path3", icon: <EmojiPeopleIcon sx={{ color: "#00592A", background: "#E0FFEF", borderRadius: "50%", width: '40px', height: "40px", p: '10px', mr: "10px" }} />, label: "Chamada", text: "5° ano A" },
              { to: "/path1", icon: <ReceiptLongIcon sx={{ color: "#2D74FF", background: "#EDF3FF", borderRadius: "50%", width: '40px', height: "40px", p: '10px', mr: "10px" }} />, label: "Nota", text: "5° ano A" },
              { to: "/path2", icon: <PriorityHighIcon sx={{ color: "#DE2D2D", background: "#FFE9E9", borderRadius: "50%", width: '40px', height: "40px", p: '10px', mr: "10px" }} />, label: "Ocorrencia", text: "5° ano A" },
            ].map((buttonData, index) => (
              <Button
                key={index}
                variant="contained"
                component={Link}
                to={buttonData.to}
                sx={{
                  textTransform: 'none', bgcolor: 'white', color: "black", borderRadius: "12px", p: "1rem", boxShadow: "none", display: "flex", justifyContent: "space-between",
                  '&:hover': {
                    bgcolor: '#FFFAF6', outline: '2px solid #FFD6BF', transition: '.0s', boxShadow: "none"
                  }
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {buttonData.icon}
                  {buttonData.label}
                </Box>
                {buttonData.text}
              </Button>
            ))}
          </Stack>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1} sx={{ mt: "20px", p: '0' }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Button
              key={index}
              variant="contained"
              component={Link}
              to="/path3"
              sx={{
                textTransform: 'none', bgcolor: 'white', color: "black", borderRadius: "12px", p: "1rem", boxShadow: "none", display: "flex", justifyContent: "space-between", mb: 2,
                '&:hover': {
                  bgcolor: '#FFFAF6', outline: '2px solid #FFD6BF', transition: '.0s', boxShadow: "none"
                }
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EmojiPeopleIcon sx={{
                  color: "#00592A", background: "#E0FFEF", borderRadius: "50%", width: '40px', height: "40px", p: '10px', mr: "10px"
                }} />
                Chamada
              </Box>
              5° ano A
            </Button>
          ))}
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2} sx={{ mt: "20px", p: '0' }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Button
              key={index}
              variant="contained"
              component={Link}
              to="/path3"
              sx={{
                textTransform: 'none', bgcolor: 'white', color: "black", borderRadius: "12px", p: "1rem", boxShadow: "none", display: "flex", justifyContent: "space-between", mb: 2,
                '&:hover': {
                  bgcolor: '#FFFAF6', outline: '2px solid #FFD6BF', transition: '.0s', boxShadow: "none"
                }
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <PriorityHighIcon sx={{
                  color: "#DE2D2D", background: "#FFE9E9", borderRadius: "50%", width: '40px', height: "40px", p: '10px', mr: "10px"
                }} />
                Ocorrências
              </Box>
              5° ano A
            </Button>
          ))}
        </CustomTabPanel>

        <CustomTabPanel value={value} index={3} sx={{ mt: "20px", p: '0' }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Button
              key={index}
              variant="contained"
              component={Link}
              to="/path3"
              sx={{
                textTransform: 'none', bgcolor: 'white', color: "black", borderRadius: "12px", p: "1rem", boxShadow: "none", display: "flex", justifyContent: "space-between", mb: 2,
                '&:hover': {
                  bgcolor: '#FFFAF6', outline: '2px solid #FFD6BF', transition: '.0s', boxShadow: "none"
                }
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ReceiptLongIcon sx={{
                  color: "#2D74FF", background: "#EDF3FF", borderRadius: "50%", width: '40px', height: "40px", p: '10px', mr: "10px"
                }} />
                Notas
              </Box>
              5° ano A
            </Button>
          ))}
        </CustomTabPanel>
      </Stack>
    </Stack>
  );
};

export default HomeContent;