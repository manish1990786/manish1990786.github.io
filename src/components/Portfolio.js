import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  LinearProgress,
  TextField,
  Chip,
  Divider,
  Avatar,
  Paper,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Zoom,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  LinkedIn,
  GitHub,
  Email,
  Phone,
  LocationOn,
  Web,
  Code,
  Storage,
  Cloud,
  Timeline,
  Work,
  School,
  Send,
  TrendingUp,
  Speed,
  Security,
  Layers,
  ArrowForward,
  Download,
  OpenInNew,
} from '@mui/icons-material';

const Portfolio = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const skills = {
    frontend: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'Angular', level: 85, icon: '🅰️' },
      { name: 'Vue.js', level: 85, icon: '💚' },
      { name: 'TypeScript', level: 88, icon: '🔷' },
      { name: 'JavaScript', level: 95, icon: '🟨' },
    ],
    backend: [
      { name: 'Node.js', level: 95, icon: '🟢' },
      { name: 'Java Spring Boot', level: 88, icon: '☕' },
      { name: 'PHP Laravel', level: 90, icon: '🐘' },
      { name: 'Express.js', level: 92, icon: '🚀' },
      { name: 'Nest.js', level: 90, icon: '🔴' },
    ],
    database: [
      { name: 'MySQL', level: 90, icon: '🗄️' },
      { name: 'MongoDB', level: 85, icon: '🍃' },
      { name: 'PostgreSQL', level: 82, icon: '🐘' },
      { name: 'Redis', level: 80, icon: '🔴' },
      { name: 'Elasticsearch', level: 75, icon: '🔍' },
    ],
    cloud: [
      { name: 'AWS', level: 90, icon: '☁️' },
      { name: 'Azure', level: 85, icon: '🌐' },
      { name: 'Docker', level: 88, icon: '🐋' },
      { name: 'Kubernetes', level: 85, icon: '⚙️' },
      { name: 'CI/CD', level: 90, icon: '🔄' },
    ],
  };

  const experiences = [
    {
      period: 'May 2024 - Present',
      title: 'Lead Software Engineer',
      company: 'Korn Ferry',
      location: 'Remote',
      description: 'Leading software engineering initiatives and architecting scalable solutions...',
      technologies: ['React', 'Node.js', 'AWS'],
      achievements: [
        'Led a team of 8 engineers',
        'Architected microservices handling 100K+ requests',
      ]
    },
    {
      period: 'Sep 2023 - Apr 2024',
      title: 'Senior Software Engineer',
      company: 'Benchmark IT Solutions',
      location: 'Pune, Maharashtra, India',
      description: 'Developed complex enterprise applications...',
      technologies: ['Angular', 'Java Spring Boot', 'PostgreSQL'],
      achievements: ['Implemented DevOps practices']
    },
    {
      period: 'Sep 2021 - Aug 2023',
      title: 'Associate Software Engineer',
      company: 'Skillmine Technology Consulting',
      location: 'Mumbai, Maharashtra, India',
      description: 'Built robust full-stack applications...',
      technologies: ['Vue.js', 'MongoDB'],
      achievements: ['Delivered 15+ projects']
    },
    {
      period: 'Jan 2021 - Sep 2021',
      title: 'Freelancer',
      company: 'Freelance',
      location: 'Remote',
      description: 'Worked on diverse client projects independently.',
      technologies: ['React', 'Node.js'],
      achievements: ['Completed 10+ freelance contracts']
    },
    {
      period: 'Sep 2018 - Jan 2021',
      title: 'Web Application Specialist',
      company: 'Tecqza',
      location: 'Chhattisgarh, India',
      description: 'Specialized in full-stack web app development.',
      technologies: ['PHP', 'Laravel', 'JavaScript'],
      achievements: ['Created scalable CMS solutions']
    },
    {
      period: 'Jan 2018 - Aug 2018',
      title: 'Software Engineer',
      company: 'Regalix / MarketStar India',
      location: 'Bengaluru, Karnataka, India',
      description: 'Worked on client platform enhancements and integrations.',
      technologies: ['JavaScript', 'jQuery', 'CRM'],
      achievements: ['Improved support tools for clients']
    },
    {
      period: 'Oct 2015 - Dec 2017',
      title: 'Programmer / Trainee',
      company: 'Garuda Dezine',
      location: 'Bilaspur, Chhattisgarh, India',
      description: 'Handled multiple local client web solutions.',
      technologies: ['PHP', 'WordPress'],
      achievements: ['Built 20+ websites']
    },
    {
      period: 'Sep 2012 - Oct 2015',
      title: 'Intern',
      company: 'Garuda Dezine',
      location: 'Bilaspur, Chhattisgarh, India',
      description: 'Supported in web development and testing.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      achievements: ['Assisted senior developers']
    },
    {
      period: 'Mar 2010 - Sep 2012',
      title: 'Information Technology Trainer',
      company: 'Dsouza Computer Education',
      location: 'India',
      description: 'Trained students in software development fundamentals.',
      technologies: ['C', 'C++', 'Java'],
      achievements: ['Trained 100+ students']
    }
  ];


  const achievements = [
    { number: '15+', label: 'Years Experience', icon: <TrendingUp /> },
    { number: '50+', label: 'Projects Completed', icon: <Work /> },
    { number: '100K+', label: 'Lines of Code', icon: <Code /> },
    { number: '25+', label: 'Technologies Mastered', icon: <Layers /> },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`mailto:manishbansal019@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const SkillCard = ({ title, skillsData, icon, color }) => (
    <Card sx={{ height: '100%', position: 'relative', overflow: 'visible', width: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Box display="flex" alignItems="center" mb={3}>
          <Box
            sx={{
              p: 1.5,
              borderRadius: 2,
              bgcolor: color === 'primary' ? 'primary.main' : 'secondary.main',
              color: 'white',
              mr: 2,
            }}
          >
            {icon}
          </Box>
          <Typography variant="h6" fontWeight={600}>
            {title}
          </Typography>
        </Box>
        {skillsData.map((skill, index) => (
          <Box key={index} mb={2.5}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <Box display="flex" alignItems="center">
                <Typography variant="body2" sx={{ mr: 1 }}>
                  {skill.icon}
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  {skill.name}
                </Typography>
              </Box>
              <Chip
                label={`${skill.level}%`}
                size="small"
                sx={{
                  bgcolor: color === 'primary' ? 'primary.main' : 'secondary.main',
                  color: 'white',
                  fontWeight: 600,
                }}
              />
            </Box>
            <LinearProgress
              variant="determinate"
              value={skill.level}
              sx={{
                height: 8,
                borderRadius: 4,
                bgcolor: 'grey.200',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                  background: color === 'primary' ?
                    `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})` :
                    `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
                },
              }}
            />
          </Box>
        ))}
      </CardContent>
    </Card>
  );

  const ExperienceCard = ({ experience, index }) => (
    <Card
      sx={{
        mb: 4,
        position: 'relative',
        overflow: 'visible',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: -20,
          top: 24,
          width: 4,
          height: 'calc(100% + 32px)',
          bgcolor: 'primary.main',
          borderRadius: 2,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          left: -30,
          top: 20,
          width: 20,
          height: 20,
          bgcolor: 'primary.main',
          borderRadius: '50%',
          border: '4px solid white',
          boxShadow: '0 0 0 4px rgba(25, 118, 210, 0.2)',
        },
      }}
    >
      <CardContent sx={{ p: 4, pl: 6 }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <Box>
            <Typography variant="h5" fontWeight={600} color="primary.main" gutterBottom>
              {experience.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {experience.company}
            </Typography>
          </Box>
          <Chip
            label={experience.period}
            color="primary"
            variant="outlined"
            sx={{ fontWeight: 500 }}
          />
        </Box>
        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
          {experience.description}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box>
      {/* Navigation */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: scrolled ? 'primary.main' : 'white',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
          >
            Manish Agrawal
          </Typography>
          {isMobile ? (
            <IconButton
              color="inherit"
              onClick={() => setMobileOpen(true)}
              sx={{
                color: scrolled ? 'primary.main' : 'white',
                p: 1.5,
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box display="flex" gap={1}>
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: scrolled ? 'text.primary' : 'white',
                    fontWeight: 600,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: scrolled
                        ? 'rgba(0, 102, 204, 0.08)'
                        : 'rgba(255, 255, 255, 0.15)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            bgcolor: 'background.paper',
            borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <Box p={3}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h6" color="primary.main" fontWeight={700}>
              Navigation
            </Typography>
            <IconButton onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navigationItems.map((item) => (
              <ListItem
                key={item.id}
                button
                onClick={() => scrollToSection(item.id)}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  '&:hover': {
                    bgcolor: 'primary.light',
                    color: 'primary.main',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 600,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Hero Section */}
      <Box
        id="home"
        className="hero-gradient"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          pt: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box className="hero-content">
            <Fade in={true} timeout={1000}>
              <Box textAlign="center">
                <Typography
                  variant="h1"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                    fontWeight: 800,
                    mb: 2,
                    background: 'linear-gradient(45deg, #ffffff, #e3f2fd)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Hi, I'm <Box component="span" sx={{ color: 'secondary.main' }}>Manish</Box>
                </Typography>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                    fontWeight: 600,
                    mb: 3,
                    opacity: 0.95,
                  }}
                >
                  M.Tech BITS Pilani Alumni | Full-Stack Maestro | Cloud & DevOps Enthusiast
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    maxWidth: 700,
                    mx: 'auto',
                    mb: 4,
                    opacity: 0.9,
                    lineHeight: 1.6,
                    fontSize: { xs: '1rem', md: '1.2rem' },
                  }}
                >
                  Innovative Software Engineer with over 15 years of expertise in software development
                  and engineering. I specialize in delivering innovative solutions across diverse
                  programming languages, platforms, and architectures.
                </Typography>
                <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap" mb={5}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => scrollToSection('skills')}
                    endIcon={<ArrowForward />}
                    sx={{
                      bgcolor: 'secondary.main',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 3,
                      '&:hover': {
                        bgcolor: 'secondary.dark',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    View My Skills
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => scrollToSection('contact')}
                    endIcon={<Send />}
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 3,
                      borderWidth: 2,
                      '&:hover': {
                        bgcolor: 'white',
                        color: 'primary.main',
                        borderColor: 'white',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Get In Touch
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" gap={2}>
                  {[
                    { href: 'https://linkedin.com/in/manish-agrawal-ms', icon: <LinkedIn />, color: '#0077b5' },
                    { href: 'https://github.com/manish1990786', icon: <GitHub />, color: '#333' },
                    { href: 'mailto:manishbansal019@gmail.com', icon: <Email />, color: '#ea4335' },
                    { href: 'https://beyondscripts.hashnode.dev/', icon: <Web />, color: '#2962ff' },
                  ].map((social, index) => (
                    <IconButton
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'white',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        p: 1.5,
                        '&:hover': {
                          bgcolor: social.color,
                          transform: 'translateY(-4px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Fade>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" py={12} bgcolor="background.paper">
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            textAlign="center"
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              color: 'text.primary',
              mb: 2,
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            paragraph
            sx={{
              maxWidth: 600,
              mx: 'auto',
              mb: 8,
              fontSize: '1.2rem',
            }}
          >
            Learn more about my background, passion for technology, and what drives my development journey.
          </Typography>

          <Grid container spacing={6} alignItems="stretch">
            <Grid item xs={12} md={6}>
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h4" gutterBottom fontWeight={600} color="primary.main">
                  My Story
                </Typography>
                <Typography paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary', lineHeight: 1.7 }}>
                  With over 15 years of experience in software development, I've had the privilege of working
                  across various industries and technologies. My journey began as an IT trainer, where I discovered
                  my passion for both technology and knowledge sharing.
                </Typography>
                <Typography paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary', lineHeight: 1.7 }}>
                  I hold an M.Tech from BITS Pilani and have evolved from a programmer to a Lead Software Engineer,
                  constantly adapting to new technologies and methodologies. My expertise spans full-stack development,
                  cloud technologies, and DevOps practices.
                </Typography>
                <Typography paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary', lineHeight: 1.7 }}>
                  Currently serving as a Lead Software Engineer at Korn Ferry, I focus on architecting scalable
                  solutions and driving technical excellence across enterprise-level projects. I'm passionate about
                  innovation, continuous learning, and building software that makes a difference.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center', // centers horizontally
                  textAlign: 'center',
                  mx: 'auto',            // horizontal margin auto to help centering in some cases
                  width: '100%',         // ✅ keep this ONLY if children are center-aligned inside
                  maxWidth: 500,         // ✅ helpful to prevent stretching on large screens
                }}
              >
                {/* ✅ Centered Image */}
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Professional developer workspace"
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    borderRadius: 3,
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                    mb: 4,
                  }}
                />

                {/* ✅ Centered Achievement Widgets */}
                <Grid container spacing={3} justifyContent="center">
                  {achievements.map((achievement, index) => (
                    <Grid key={index} item xs={6}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          textAlign: 'center',
                          borderRadius: 3,
                          bgcolor: 'background.paper',
                          color: 'text.primary',
                          border: '2px solid #e2e8f0',
                          '&:hover': {
                            borderColor: 'primary.main',
                            transform: 'translateY(-4px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <Box sx={{ mb: 1, color: 'primary.main' }}>{achievement.icon}</Box>
                        <Typography variant="h4" fontWeight={800} gutterBottom color="primary.main">
                          {achievement.number}
                        </Typography>
                        <Typography variant="body2" fontWeight={600} color="text.secondary">
                          {achievement.label}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>





          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box id="skills" py={12} bgcolor="background.default">
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            textAlign="center"
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              color: 'text.primary',
              mb: 2,
            }}
          >
            Technical Skills
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            paragraph
            sx={{
              maxWidth: 600,
              mx: 'auto',
              mb: 8,
              fontSize: '1.2rem',
            }}
          >
            A comprehensive overview of my technical expertise across different domains of software development.
          </Typography>

          <Box display="flex" justifyContent="center">
            <Grid container spacing={4} justifyContent="center" maxWidth="lg">
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <SkillCard title="Frontend" skillsData={skills.frontend} icon={<Code />} color="primary" />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <SkillCard title="Backend" skillsData={skills.backend} icon={<Storage />} color="secondary" />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <SkillCard title="Database" skillsData={skills.database} icon={<Storage />} color="primary" />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <SkillCard title="Cloud & DevOps" skillsData={skills.cloud} icon={<Cloud />} color="secondary" />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>


      {/* Experience Section */}
      <Box id="experience" py={12} bgcolor="background.paper">
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            textAlign="center"
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              color: 'text.primary',
              mb: 2,
            }}
          >
            Professional Experience
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            paragraph
            sx={{
              maxWidth: 600,
              mx: 'auto',
              mb: 8,
              fontSize: '1.2rem',
            }}
          >
            My journey through various roles and the impact I've made in each position.
          </Typography>
          <Box maxWidth="md" mx="auto" position="relative" pl={4}>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" py={12} bgcolor="background.default">
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            textAlign="center"
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              color: 'text.primary',
              mb: 2,
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            paragraph
            sx={{
              maxWidth: 600,
              mx: 'auto',
              mb: 8,
              fontSize: '1.2rem',
            }}
          >
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </Typography>
          <Grid
            container
            spacing={6}
            alignItems="stretch"
            justifyContent="center"
            sx={{ maxWidth: 'lg', mx: 'auto' }}
          >
            <Grid item xs={12} md={6}>
              <Box display="flex" justifyContent="center">
                <Card
                  sx={{
                    p: 4,
                    width: '100%',
                    maxWidth: 500,
                    boxShadow: 3,
                  }}
                >
                  <Typography variant="h5" gutterBottom fontWeight={600} color="primary.main">
                    Send a Message
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      sx={{ mb: 3 }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<Send />}
                      sx={{
                        width: '100%',
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderRadius: 2,
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Card>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography variant="h5" gutterBottom fontWeight={600} color="primary.main">
                    Contact Information
                  </Typography>
                  <Box display="flex" flexDirection="column" gap={2} mt={2}>
                    {[
                      { icon: <Email />, text: 'manishbansal019@gmail.com' },
                      { icon: <Phone />, text: '+91-6260803708' },
                      { icon: <LocationOn />, text: 'India' },
                      { icon: <Web />, text: 'beyondscripts.hashnode.dev' },
                    ].map((item, index) => (
                      <Box key={index} display="flex" alignItems="center">
                        <Box sx={{ color: 'primary.main', mr: 2 }}>{item.icon}</Box>
                        <Typography variant="body1">{item.text}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Divider sx={{ my: 4 }} />

                  <Typography variant="h6" gutterBottom fontWeight={600}>
                    Connect With Me
                  </Typography>
                  <Grid container spacing={2}>
                    {[
                      { href: 'https://linkedin.com/in/manish-agrawal-ms', icon: <LinkedIn />, label: 'LinkedIn' },
                      { href: 'https://github.com/manish1990786', icon: <GitHub />, label: 'GitHub' },
                      { href: 'https://beyondscripts.hashnode.dev/', icon: <Web />, label: 'Blog' },
                    ].map((social, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Button
                          variant="outlined"
                          startIcon={social.icon}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          fullWidth
                          sx={{ textTransform: 'none', fontWeight: 600 }}
                        >
                          {social.label}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Card>
            </Grid>
          </Grid>

        </Container>
      </Box>

      {/* Footer */}
      <Box bgcolor="primary.dark" color="white" py={6}>
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Manish Agrawal
            </Typography>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" paragraph>
              Full-Stack Developer | Cloud & DevOps Enthusiast | M.Tech BITS Pilani Alumni
            </Typography>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.5)">
              © {new Date().getFullYear()} Manish Agrawal. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Portfolio;