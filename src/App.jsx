import './App.css'
import Button from '@mui/material/Button';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleRight';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Dark
import Switcher from './components/Switcher'


// siwper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';



// TODOLIST____________________________________________
// todo
import { useEffect } from 'react';

// mui

import MenuIcon from '@mui/icons-material/Menu';
// import TextField from '@mui/material/TextField';

// swiper
import React, { useRef, useState } from 'react';
// Import Swiper React components


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules

//modal
import { Box, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// table
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import FileBase64 from 'react-file-base64';
import axios from 'axios';

//Table style
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));








function App() {
  

// TODOLIST FUNctional
// functional
const api = "http://localhost:3000/data"

const [base64F, setBase64F] = useState(null)
const [base64F1, setBase64F1] = useState(null)

const handleImg = (file) => {
  setBase64F(file.base64)
}

const handleImg1 = (file) => {
  setBase64F1(file.base64)
}

//modal 
const [open, setOpen] = useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

//modal  add
const [openAdd, setOpenAdd] = useState(false);

const handleClickOpenAdd = () => {
  setOpenAdd(true);
};

const handleCloseAdd = () => {
  setOpenAdd(false);
};


const [todo, setTodo] = useState([])
const [addName, setAddName] = useState("")
const [addCity, setAddCity] = useState("")
const [addNumber, setAddNumber] = useState("")

const [editName, setEditName] = useState("")
const [editCity, setEditCity] = useState("")
const [editNumber, setEditNumber] = useState("")
const [idx, setIdx] = useState(null)


// function get
async function get() {
  try {
    let { data } = await axios.get(api)
    setTodo(data)
  }
  catch (error) {
    console.log(error);
  }
}
useEffect(() => {
  get()
}, [])


// Delete
async function deleteUser(id) {
  try {
    let { data } = await axios.delete( `${api}/${id}`)
    get()
  } catch (error) {
    console.log(error);
  }
}

// Edit 
async function editUser(id, user) {
  try {
    let { data } = await axios.put(`${api}/${id}`, user);
    get()
  } catch (error) {
    console.log(error);
  }
}

// Add user
async function addUser(user) {
  try {
    let { data } = await axios.post(api, user)
    get()
  } catch (error) {
    console.log(error);
  }
}





  // swiper
  const [swiperRef, setSwiperRef] = useState(null);
  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };
  
  return (
    // main
<div className='dark:bg-[#11172b] dark:text-[white]'>
 
<header className='flex justify-between items-center  '>

{/* left */}
<div className='flex justify-between md:w-[34%] mob:w-[100%] items-center p-[2%] ' >
<div className='md:inline-flex mob:hidden flex justify-center items-center rounded-full bg-[#5252c443] w-[50px] h-[50px]'>
  <MenuOpenIcon></MenuOpenIcon>
  </div>
<img src="src/assets/Union (1).svg" alt="" />
<Button variant="contained" color="primary" sx={{width:"180px" , height:"50px", borderRadius:"25px"}}>Заказать</Button>
<div className='mob:inline-flex md:hidden flex justify-center items-center rounded-full bg-[#5252c443] w-[50px] h-[50px]'>
  <MenuOpenIcon></MenuOpenIcon>
  
  </div>
</div>

{/* right */}
<div className='md:inline-flex mob:hidden  flex justify-between md:w-[34%] items-center p-[2%] '>
<TelegramIcon sx={{color:"blue"}}></TelegramIcon>
<WhatsAppIcon sx={{color:"green"}}></WhatsAppIcon>
  <p className='text-[#4061F8] font-bold'>Портфолио</p>
  
  <p className='font-bold'>О студии</p>
  <p className='font-bold'>Контакты</p>
  <ArrowCircleRightIcon sx={{fontSize:"40px"}}></ArrowCircleRightIcon>
  {/* dark */}
  <Switcher />
  
</div>
</header>


{/* section1 */}
<section className='flex justify-between '>
{/* left */}
<div className=''>
  {/* top */}
  <div className='flex pl-[6%]'>
    <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
    <div className='flex'>
      <p>Главная</p>
      <ChevronRightIcon></ChevronRightIcon>
      <p className='text-[#BDBFC8]'>Искусственный интеллект</p>
    </div>
  </div>


<div className='mt-[8%] pl-[12%] md:w-[150%] md:h-[440px] flex flex-col justify-end'>
<p className='mob:text-[30px] md:text-[50px] font-bold'>Разработка системы </p>
<p className='mob:text-[30px] md:text-[50px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-violet-600 to-blue-500'>с искусственным </p>
<p className='mob:text-[30px] md:text-[50px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-violet-600 to-blue-500'>интеллектом (ИИ)</p>
<p className='font-bold'>Эффективное решение задачи с помощью машинного обучения (ML)</p>
</div>

</div>

{/* right */}
<div className='section1Right mob:hidden md:block'>
<img src="src/assets/Depositphotos_187294588_XL 1.png" alt="" />
</div>

</section>




{/* section2 */}
<section>
  <div>
    {/* row1 */}
<div className='p-[6%] md:flex justify-around  mt-[2%]'>
  <div className='card1 md:p-[2%] mob:p-[10%] '>
    <h2 className='text-[#9A52FD] text-[20px] font-bold'>Под ключ</h2>
    <p className='font-bold'>С нуля, под ключ, для <br /> бизнеса или стартапа</p>
  </div>

  <div className='card2 md:p-[2%] mob:p-[10%] '>
    <h2 className='text-[#9A52FD] text-[20px] font-bold'>ML сервисы </h2>
    <p className='font-bold'>Создадим свой ML движок <br /> либо соберем из готовых <br /> библиотек или SaaS решений</p>
  </div>
  <div className='card3 md:p-[2%] mob:p-[10%] '>
    <h2 className='text-[#9A52FD] text-[20px] font-bold'>Обучим модели</h2>
    <p className='font-bold'>Подбор платформы, <br /> построение и обучение <br /> модели</p>
  </div>
  </div>


 {/* row2 */}
 <div className='p-[6%] md:flex justify-around  mt-[2%]'>
  <div className='card1 md:p-[2%] mob:p-[10%]'>
    <h2 className='text-[#9A52FD] text-[20px] font-bold'>Back-end / Front-end</h2>
    <p className='font-bold'>С нуля, под ключ, для <br /> бизнеса или стартапа</p>
  </div>
  <div className='card2 md:p-[1%] mob:p-[10%] '>
    <h2 className='text-[#9A52FD] text-[20px] font-bold '>Запустим</h2>
    <p className='font-bold'>Создадим свой ML движок <br /> либо соберем из готовых </p>
  </div>
  <div className='card3 md:p-[2%] mob:p-[10%] '>
    <h2 className='text-[#9A52FD] text-[20px] font-bold'>Поддержка</h2>
    <p className='font-bold'>Подбор платформы, <br /> построение и обучение </p>
  </div>
  
</div>

<div>

</div>

  </div>
</section>


{/* section3 */}
<section className='md:flex m-[4%]  dark:bg-[#11172b]   bg-[#E9EEF3]  shadow-xl '>
  {/* left */}
  <div className='bg-[#E9EEF3]  dark:bg-[#11172b] md:w-[50%] p-[2%]'>
{/* top */}
<div className='flex'>
  <h1 className='text-[50px] font-bold'>
  Подготовка к ИИ
  </h1>
  <img src="src/assets/image 1759.svg" alt="" />
</div>

<h1 className='font-bold text-[30px]'>3 последовательных этапа работ</h1>


<div className='md:flex justify-evenly items-center md:w-[90%] md:h-[80px]  m-[4%] rounded-xl bg-[#6293e847]'>
  <div className='md:w-[32%] font-bold flex items-center justify-evenly shadow-xl h-[70px] rounded-[26px] bg-[white] dark:text-[black]'><h1>1. Техническое задание</h1></div>
  <div className='md:w-[32%] font-bold flex items-center justify-evenly h-[70px] rounded-[26px]'><h1>2. Анализ <br /> моделей ИИ </h1></div>
  <div className='md:w-[32%] font-bold flex items-center justify-evenly h-[70px] rounded-[26px]'><h1>3. Архитектура системы с ИИ</h1></div>
</div>

<div className='m-[2%]'>
  <div className='flex'>
    <img src="src/assets/badge-check.svg" alt="" />
    <p className='font-medium'>Описание идеи в тех документ</p>
  </div>
  <div  className='flex'>
    <img src="src/assets/badge-check.svg" alt="" />
    <p className='font-medium'>Постановка задач машинного обучения</p>
  </div>
  <div  className='flex'>
    <img src="src/assets/badge-check.svg" alt="" />
    <p className='font-medium'>Документирование ожидаемого результата</p>
  </div>
</div>

<p className='md:w-[70%] m-[2%]'>В ТЗ описывается: «что нужно достичь с помощью ИИ и дополнительных компонентов системы, а также, откуда будут браться входные данные, куда они будут попадать дальше (промежуточная обработка) и в каком виде и где должен будет выводиться итоговый результат системы (куда потом интегрироваться)».</p>

<div className='flex m-[2%]'>
  <p className='font-bold' >от</p>
  <p className='font-bold' >45 000</p>
  <p className='font-bold' >руб /от</p>
  <p className='font-bold' >руб / от 10 дней</p>
</div>

<Button variant="contained" color="primary" sx={{width:"180px" , height:"50px", borderRadius:"25px"}}>Заказать</Button>

{/* btn */}

  </div>
  {/* right */}
  <div className='section3Right md:w-[50%] flex justify-center items-center '>
   <img src="src/assets/Group 179936323.svg" className='w-[450px] h-[450px]' alt="" />
  </div>
</section>


{/* section4 */}
<section className='md:flex justify-around items-center'>
  {/* left */}
  <div className='md:w-[40%] '>
    <div className='flex md:text-[50px] mob:text-[30px] font-bold'>
      <p>Создание ИИ</p>
      <img src="src/assets/image 1761.svg" alt="" />
    </div>
    <p className='font-bold'>Использование готовых моделей</p>


<div className='flex font-medium mt-[2%]'>
<img src="src/assets/badge-check.svg" alt="" />
  <p>Настройка модели</p>
</div>

<div className='flex font-medium'>
<img src="src/assets/badge-check.svg" alt="" />
  <p>Подготовка данных</p>
</div>

<div className='flex font-medium'>
<img src="src/assets/badge-check.svg" alt="" />
  <p>Обучение модели</p>
</div>

<div className='flex font-medium'>
<img src="src/assets/badge-check.svg" alt="" />
  <p>Оценка результата</p>
</div>

<div className='flex font-medium mb-[2%]'>
<img src="src/assets/badge-check.svg" alt="" />
  <p>Оптимизация</p>
</div>

<p className='font-medium'>Создание искусственного интеллекта происходит в несколько повторяющихся этапов. Настройка готовой модели под требования из ТЗ. Сбор данных (структурируются имеющиеся, осуществляется поиск среди открытых источников либо создаются с нуля). Тренировка модели (т.е. обучение для получения желаемого результата от нее). Оценка результата (тестирование на данных, которые модель ранее не видела). Оптимизация (новые данные, тренировка, оценка).</p>
<div className='flex m-[2%]'>
  <p className='font-bold' >от</p>
  <p className='font-bold' >45 000</p>
  <p className='font-bold' >руб /от</p>
  <p className='font-bold' >руб / от 10 дней</p>
</div>
<Button variant="contained" color="primary" sx={{width:"180px" , height:"50px", borderRadius:"25px"}}>Подробнее</Button>

  </div>
  {/* right */}
  <div className='md:w-[40%]'>
    <img src="src/assets/Group 179936978.svg" alt="" />
  </div>
</section>


{/* section5 */}
<section className='md:flex justify-between shadow-xl items-center mt-[8%]  dark:bg-[#11172b] bg-[#D2F4E4] m-[4%]'>
  {/* left */}
  <div className='md:w-[40%]  p-[2%] '>
    <div className='flex md:text-[50px] mob:text-[30px] font-bold'>
      <p>Система с ИИ</p>
      <img src="src/assets/image 1761.svg" alt="" />
    </div>
    <p className='font-bold'>Реализация всей системы с ИИ под ключ</p>


<div className='flex font-medium mt-[2%]'>
<img src="src/assets/badge-check.svg" alt="" />
  <p>Настройка модели</p>
</div>

<div className='flex font-medium'>
<img src="src/assets/badge-check.svg" alt="" />
  <p>Подготовка данных</p>
</div>

<div className='flex font-medium'>
<img src="src/assets/badge-check.svg" alt="" />
  <p>Обучение модели</p>
</div>

<div className='flex font-medium'>
<img src="src/assets/badge-check.svg" alt="" />
  <p>Оценка результата</p>
</div>

<div className='flex font-medium mb-[2%]'>
<img src="src/assets/badge-check.svg" alt="" />
  <p>Оптимизация</p>
</div>

<p className='font-medium'>Создание искусственного интеллекта происходит в несколько повторяющихся этапов. Настройка готовой модели под требования из ТЗ. Сбор данных (структурируются имеющиеся, осуществляется поиск среди открытых источников либо создаются с нуля). Тренировка модели (т.е. обучение для получения желаемого результата от нее). Оценка результата (тестирование на данных, которые модель ранее не видела). Оптимизация (новые данные, тренировка, оценка).</p>
<div className='flex m-[2%]'>
  <p className='font-bold' >от</p>
  <p className='font-bold' >45 000</p>
  <p className='font-bold' >руб /от</p>
  <p className='font-bold' >руб / от 10 дней</p>
</div>
<Button variant="contained" color="primary" sx={{width:"180px" , height:"50px", borderRadius:"25px"}}>Подробнее</Button>

  </div>
  {/* right */}
  <div className='md:w-[40%]'>
    <img src="src/assets/Group 179936984.svg" alt="" />
  </div>
</section>



{/* section6 */}
<section className='md:flex items-center mt-[4%]'>
  {/* ______________ */}
  <div className='p-[2%] flex flex-col '>
    <h1>Разработка ИИ</h1>
    <p>Экосистема для ИИ</p>
    <p>Функция ИИ</p>
  </div>
  {/* _________________ */}
  <div className='p-[2%]'>
    <p className='flex md:text-[50px] mob:text-[30px] font-bold'>Разработка ИИ</p>
    <p className='font-bold mb-[2%]'>Выбор платформы, создание и обучение модели</p>
  <p className='font-medium dark:text-[white]  text-[#151516]'>ИИ эффективно применяется в узких областях. Если простыми словами и по аналогии строения дерева, ИИ подразделяется на следующие базовые разделы (ствол): </p>
  <p className='font-medium dark:text-[white]  text-[#151516] mb-[3%]'>- Зрение / Данные / Звук / Речь</p>
  <p className='font-medium dark:text-[white]  text-[#151516]'>Каждый из этих разделов (ствол) имеет множество разных типов (веток), т.е. в какой именно узкой области необходимо будет работать. И каждый такой тип (ветки) имеет свои функциональные возможности (листья), т.е. что именно необходимо будет делать. </p>
  <p className='font-medium   dark:text-[white] text-[#151516] mb-[3%]'>Исходя из задачи и ожидаемого результата индивидуально подбираются технологии реализации и проектируется архитектура (строение дерева), после чего, создаются модели машинного обучения и обучаются до необходимого состояния.</p>  
  <p>Реализовывали проекты в разделах компьютерного зрения и данных</p>
  <div className='border-y-2 border-black flex justify-between p-[2%]'>
    <p className='font-bold'>Технологии, с которыми работаем</p>
    <div className='font-bold text-[20px]'>+</div>
  </div>

  </div>
  {/* ________________ */}
  <div>
  <ArrowCircleRightIcon sx={{fontSize:"40px" , color:"blue"}}></ArrowCircleRightIcon>
  <ArrowCircleLeftIcon sx={{fontSize:"40px"}}></ArrowCircleLeftIcon>
  </div>
{/* __________________ */}
<div className='text-[#D3D5DC]'>
  <h1 className='md:text-[50px] mob:text-[30px] font-bold'>Экосистема для ИИ</h1>
  <p className='font-bold mb-[4%]'>Связка из back-end’а и мобильного приложения</p>
  <p>Потенциал ИИ раскрывается в связке со сторонними системами. Для этого, мы создаем эффективную модель клиент-серверного взаимодействия. В которой, оптимально распределяем обработку функций и возможностей, логики и данных. 
</p>
<p>Серверная часть (back-end) - в основном выступает внутренним ядром экосистемы. В ее разработке мы применяем самый современный стек технологий, который заведомо предполагает работу с ИИ.
</p>
<p>Мобильное приложение (клиентская часть) - это то, через что будет происходить использование ИИ. Поэтому, в их разработке мы применяем самые качественные «нативные» технологии (high quality), которые также имеют возможность прямого внедрения ИИ</p>
<div>
  <p>Технологии, с которыми работаем</p>
</div>
</div>

</section>



{/* section7 */}
<section className='md:block mob:hidden'>
  {/* title */}
 <div className='flex justify-center'>
  <p className='font-bold text-[50px]'>Реализованные проекты</p>
  <img src="src/assets/image 202.svg" alt="" />
 </div>


{/* swiper */}
<div>
<Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      
      >
        <SwiperSlide className='bg-[#F5EEEE] dark:bg-[#11172b]'>
          <div>
          <p>Маркетплейс</p>
          <p className='font-bold text-[20px]'>Eat Repeat</p>
          <p className=''>Давай займемся спортом вместе. Любой тренер и любая программа собраны в этом приложении</p>
          <p className='font-bold m-[2%]'>от 1 800 000 руб.</p>
          </div>
          <img className='mr-[-14%]' src="src/assets/Eat repeat 2.svg" alt="" />
        </SwiperSlide>

        <SwiperSlide className='bg-[#BFDFE6] dark:bg-[#11172b]'>
        <div>
          <p>Маркетплейс</p>
          <p className='font-bold text-[20px]'>Eat Repeat</p>
          <p className=''>Давай займемся спортом вместе. Любой тренер и любая программа собраны в этом приложении</p>
          <p className='font-bold m-[2%]'>от 1 800 000 руб.</p>
          </div>
          <img className='mr-[-14%]' src="src/assets/Eat repeat 2.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <p>Маркетплейс</p>
          <p className='font-bold text-[20px]'>Eat Repeat</p>
          <p className=''>Давай займемся спортом вместе. Любой тренер и любая программа собраны в этом приложении</p>
          <p className='font-bold m-[2%]'>от 1 800 000 руб.</p>
          </div>
          <img className='mr-[-14%]' src="src/assets/Group 179936790.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <p>Маркетплейс</p>
          <p className='font-bold text-[20px]'>Eat Repeat</p>
          <p className=''>Давай займемся спортом вместе. Любой тренер и любая программа собраны в этом приложении</p>
          <p className='font-bold m-[2%]'>от 1 800 000 руб.</p>
          </div>
          <img className='mr-[-14%]' src="src/assets/Eat repeat 2.svg" alt="" />
        </SwiperSlide>
      </Swiper>




{/* section8 */}
<section >
  <div className='flex'>
  <h1 className='font-bold md:text-[50px] mob:text-[30px] p-[5%]'>Этапы реализации ИИ</h1>
  <img src="src/assets/image 1750.svg" alt="" />
  </div>
<div className='md:flex justify-around'>
{/* left */}
<div>

  <div className='flex items-center'>
     <div className='w-[50px] h-[50px] rounded-[12px] flex justify-center items-center bg-[#EAF0F6]'>
      <p className='text-[#9A52FD] text-[20px] font-bold'>00</p>
     </div>
    <p className='font-bold ml-[1%]'>Функицональные требования</p>
  </div>
  <div className='flex items-center'>
     <div className='w-[50px] h-[50px] rounded-[12px] flex justify-center items-center bg-[#EAF0F6]'>
      <p className='text-[#9A52FD] text-[20px] font-bold'>01</p>
     </div>
    <p className='font-bold ml-[1%]'>Техническое задание</p>
  </div>
  <div className='flex items-center'>
     <div className='w-[50px] h-[50px] rounded-[12px] flex justify-center items-center bg-[#EAF0F6]'>
      <p className='text-[#9A52FD] text-[20px] font-bold'>02</p>
     </div>
    <p className='font-bold ml-[1%]'>Анализ</p>
  </div>
  <div className='flex items-center'>
     <div className='w-[50px] h-[50px] rounded-[12px] flex justify-center items-center bg-[#EAF0F6]'>
      <p className='text-[#9A52FD] text-[20px] font-bold'>03.</p>
     </div>
    <p className='font-bold ml-[1%]'>Проектирование архитектуры</p>
  </div>
  <div className='flex items-center'>
     <div className='w-[50px] h-[50px] rounded-[12px] flex justify-center items-center bg-[#EAF0F6]'>
      <p className='text-[#9A52FD] text-[20px] font-bold'>04.</p>
     </div>
    <p className='font-bold ml-[1%]'>Создание ИИ</p>
  </div>
  <div className='flex items-center'>
     <div className='w-[50px] h-[50px] rounded-[12px] flex justify-center items-center bg-[#EAF0F6]'>
      <p className='text-[#9A52FD] text-[20px] font-bold'>05.</p>
     </div>
    <p className='font-bold ml-[1%]'>Упаковка ИИ в модуль</p>
  </div>
  <div className='flex items-center'>
     <div className='w-[50px] h-[50px] rounded-[12px] flex justify-center items-center bg-[#EAF0F6]'>
      <p className='text-[#9A52FD] text-[20px] font-bold'>06.</p>
     </div>
    <p className='font-bold ml-[1%]'>Интеграция модуля ИИ в бизнес</p>
  </div>
  <div className='flex items-center'>
     <div className='w-[50px] h-[50px] rounded-[12px] flex justify-center items-center bg-[#EAF0F6]'>
      <p className='text-[#9A52FD] text-[20px] font-bold'>07.</p>
     </div>
    <p className='font-bold ml-[1%]'>Контроль достижения качества*</p>
  </div>
 <div className='mt-[5%] mb-[4%]'>
  <Button variant="contained" color="primary" sx={{width:"220px" , height:"50px", borderRadius:"25px"}}>Подробнее об этапах</Button>
</div>
</div>
{/* right */}
<div>
  <img src="src/assets/Card1212.jpg" alt="" />
</div>
</div>
<div className='flex justify-end p-[3%]'>
  <p className='md:w-[60%] '>*Управление и контроль этапами реализации (менеджмент). Тестирование и отладка (QA/QC). Взаимодействие со сторонними системами и сервисами (API). Размещение проекта на сервере (хостинг). Консультации и решение проблем. Техническая поддержка 12 месяцев (бесплатно).</p>
  </div>
</section>


{/* section9 */}
<section>
  <div className='flex'>
  <h1 className='font-bold md:text-[50px] mob:text-[30px] p-[5%]'>Заказать услугу по разработке ИИ</h1>
 <img src="src/assets/image 1760.svg" alt="" />
  </div>


  <div>
    <p className='font-bold ml-[8%] mb-[2%]'>Основные:</p>
   
    <div className='md:flex justify-around md:w-[80%]'>
      <div className='bg-[#D2F4E4] md:w-[18%] p-[2%] m-[2%] rounded-xl shadow-xl'>
        <p className='font-bold m-[2%]'>Создание ИИ</p>
        <p className='font-bold m-[2%]'>от 202 500 руб</p>
        <p className='font-medium text-[#BDBFC8]'>от 23 дней</p>
      </div>
      <div className='bg-[#F5EEEE] md:w-[18%] p-[2%] m-[2%] rounded-xl shadow-xl'>
        <p className='font-bold m-[2%]'>Экосистема для ИИ</p>
        <p className='font-bold m-[2%]'>от 843 750 руб</p>
        <p className='font-medium text-[#BDBFC8]'>от 3 месяцев</p>
      </div>
      <div className='bg-[#EEF7D1] md:w-[18%] p-[2%] m-[2%] rounded-xl shadow-xl'>
        <p className='font-bold m-[2%]'>Проект с ИИ под ключ</p>
        <p className='font-bold m-[2%]'>от 1 462 500 руб</p>
        <p className='font-medium text-[#BDBFC8]'>от 3 месяцев</p>
      </div>
    </div>

    <div>
<p className='font-bold ml-[8%] mb-[2%] mt-[2%]'>Услуги всего цикла:</p>


<div className='md:flex justify-around'>
<div className='bg-[#FAECFC] md:w-[18%] p-[2%] m-[2%] rounded-xl shadow-xl'>
        <p className='font-bold m-[2%]'>Техническое задание</p>
        <p className='font-bold m-[2%]'>от 1 462 500 руб</p>
        <p className='font-medium text-[#BDBFC8]'>от 3 месяцев</p>
      </div>
<div className='bg-[#BFDFE6] md:w-[18%] p-[2%] m-[2%] rounded-xl shadow-xl'>
        <p className='font-bold m-[2%]'>Анализ и архитектура</p>
        <p className='font-bold m-[2%]'>от 1 462 500 руб</p>
        <p className='font-medium text-[#BDBFC8]'>от 3 месяцев</p>
      </div>
<div className='bg-[#EAEAF6] md:w-[18%] p-[2%] m-[2%] rounded-xl shadow-xl'>
        <p className='font-bold m-[2%]'>Дизайн для приложения</p>
        <p className='font-bold m-[2%]'>от 1 462 500 руб</p>
        <p className='font-medium text-[#BDBFC8]'>от 3 месяцев</p>
      </div>
<div className='bg-[#F4E4D2] md:w-[18%] p-[2%] m-[2%] rounded-xl shadow-xl'>
        <p className='font-bold m-[2%]'>Разработка back-end</p>
        <p className='font-bold m-[2%]'>от 1 462 500 руб</p>
        <p className='font-medium text-[#BDBFC8]'>от 3 месяцев</p>
      </div>
</div>
<div className='w-[90%] h-[10vh] flex justify-end items-center mob:hidden md:inline-flex'>
<div className='flex'>
<img src="src/assets/Group 1502.svg" alt="" />
<img src="src/assets/Group 1503.svg" alt="" />
</div>
</div>
</div>

  </div>
</section>
</div>
</section>



{/* TABle TODOLIST */}
{/* todo */}
<TableContainer
            sx={{
              width: "95%",
              margin: "0 auto",
              paddingBottom: "50px",
              paddingTop: "10px",
            }}
          >
            <button
              className="bg-[hsl(186,43%,23%)] py-[5px] px-[15px] rounded-[5px] text-white mb-[20px]"
              onClick={() => {
                handleClickOpenAdd();
              }}
            >
              New +
            </button>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right" sx={{ textAlign: "start" }}>
                    Img
                  </StyledTableCell>
                  <StyledTableCell align="right" sx={{ textAlign: "center" }}>
                    Name
                  </StyledTableCell>
                  <StyledTableCell align="right" sx={{ textAlign: "center" }}>
                    City
                  </StyledTableCell>
                  <StyledTableCell align="right" sx={{ textAlign: "center" }}>
                    Phone
                  </StyledTableCell>
                  <StyledTableCell align="right" sx={{ textAlign: "center" }}>
                    Action
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todo.map((e) => (
                  <StyledTableRow>
                    <StyledTableCell align="right" sx={{ textAlign: "center" }}>
                      {<img src={e.file} className="h-[100px] w-[100px]" />}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{ textAlign: "center", color: "blue" }}
                    >
                      {e.name}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{ textAlign: "center", color: "red" }}
                    >
                      {e.city}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{ textAlign: "center", color: "red" }}
                    >
                      {e.number}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{ textAlign: "center", color: "red" }}
                    >
                      <Box className="flex justify-center items-center gap-[20px]">
                        <button
                          className="bg-[#27a640] px-[25px] text-[white] p-[8px] rounded-[10px]"
                          onClick={() => deleteUser(e.id)}
                        >
                          Delete
                        </button>
                        <button
                          className="bg-[#5c3289] px-[20px] text-[white] p-[8px] rounded-[10px]"
                          onClick={() => {
                            handleClickOpen();
                            setIdx(e.id);
                            setEditName(e.name);
                            setBase64F(e.file);
                            setEditCity(e.city);
                            // file: base64F
                            setEditNumber(e.number);
                          }}
                        >
                          Edit
                        </button>
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>



{/* footer */}
<footer className='p-[5%]'>
  <div className='bg-[#EAF0F6] dark:bg-[#11172b] rounded-2xl  md:flex justify-around p-[4%] shadow-lg'>
 
 
    {/* left */}
<div>
<div className='flex'>
  <p className='font-bold md:text-[50px] mob:text-[30px]'>Контакты</p>
  <img src="src/assets/Mask Group.svg" alt="" />
  </div>

  <p className='font-bold m-[2%]'>8 (800) 707-23-60</p>
  <p className='font-bold m-[2%]'>hello@appsstudio.ru</p>
<div>

  {/* row1 */}
  <div className='flex'>
    <div className='flex items-center'>
      <img src="src/assets/123.svg" alt="" />
      <p className='font-bold'>Telegram</p>
    </div>
    <div className='flex items-center font-bold m-[2%]'>
      <img src="src/assets/1234.svg" alt="" />
      <p>WhatsApp</p>
    </div>
  </div>

  {/* row2 */}

  <div className='flex'>
    <div className='flex items-center font-bold'>
      <img src="src/assets/Group 862.svg" alt="" />
      <p>Instagram</p>
    </div>
    <div className='flex items-center font-bold m-[2%]'>
      <img src="src/assets/12345.svg" alt="" />
      <p>Behance</p>
    </div>
  </div>
</div>

<p className='font-bold'>Россия </p>
<hr  className=' border-black border-[1px] my-3 ' />
<p className='font-bold'>© ООО “АППсСтудио”, 2013 - ∞  </p>

</div>

{/* right */}
<div className='bg-[#FFFFFF] dark:bg-[#11172b] p-[4%] mt-[2%]  rounded-2xl'>
<p className='md:text-[40px] font-bold text-center'>Оставить заявку</p>

<div>
  <div className='my-4 '>
<TextField id="standard-basic" label="Имя" variant="standard" sx={{width:"300px"}} />
</div>
<div  className='my-4'>
<TextField id="standard-basic" label="Телефон или почта" variant="standard" sx={{width:"300px"}} />
</div>
<div  className='my-4'>
<TextField id="standard-basic" label="Комментарий" variant="standard"  sx={{width:"300px"}} />
</div>
<div>

<div className='flex justify-around items-center font-medium'>
  <div className='flex items-center'>
    <div className='bg-[#FBFBFD] '>
      <img src="src/assets/plus-circle.svg" alt="" />
    </div>
<p  >Прикрепить файл</p>
</div>
<Button variant="contained" color="primary" sx={{width:"180px" , height:"50px", borderRadius:"25px"}}>Отправить</Button>
</div>

</div>
</div>

</div>
  </div>
</footer>


{/* MODALEDIT________________________________ */}
{/* Edit*/}
<React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Edit User"}</DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
              id="alert-dialog-description"
            >
              <TextField
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              ></TextField>
              <TextField
                value={editNumber}
                onChange={(e) => setEditNumber(e.target.value)}
              ></TextField>
              <TextField
                value={editCity}
                onChange={(e) => setEditCity(e.target.value)}
              ></TextField>
              <FileBase64 multiple={false} onDone={handleImg} />
              <img src={base64F} className="rounded-[50%] w-[10%]" />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Concel</Button>
            <Button
              onClick={() => {
                let obj = {
                  name: editName,
                  number: editNumber,
                  city: editCity,
                  file: base64F,
                };
                console.log(editNumber);
                editUser(idx, obj);
                handleClose();
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      {/* modal add */}
      <React.Fragment>
        <Dialog
          open={openAdd}
          onClose={handleCloseAdd}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Add User"}</DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
              id="alert-dialog-description"
            >
              <TextField
                value={addName}
                onChange={(e) => setAddName(e.target.value)}
              ></TextField>
              <TextField
                value={addNumber}
                onChange={(e) => setAddNumber(e.target.value)}
              ></TextField>
              <TextField
                value={addCity}
                onChange={(e) => setAddCity(e.target.value)}
              ></TextField>
              <FileBase64 multiple={false} onDone={handleImg1} />
              <img src={base64F1} className="rounded-[50%] w-[20%]" />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAdd}>Concel</Button>
            <Button
              onClick={() => {
                let user = {
                  name: addName,
                  city: addCity,
                  number: addNumber,
                  file: base64F1,
                };
                setAddName("");
                setAddCity("");
                setAddNumber("");
                addUser(user);
                handleCloseAdd();
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>


</div>
    )
}

export default App
