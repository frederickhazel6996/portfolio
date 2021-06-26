export const NavbarIcon = require('../Assets/Images/hazel.svg').default;
export const ServerImage = require('../Assets/Images/server.svg').default;
export const Server1Image = require('../Assets/Images/server1.svg').default;
export const FrontendImage = require('../Assets/Images/ux.svg').default;
export const WixImage = require('../Assets/Images/shopping.svg').default;
export const GraphQL = require('../Assets/Images/graphql.svg').default;
export const Azure = require('../Assets/Images/azure.svg').default;
export const MongoDB = require('../Assets/Images/mongodb.svg').default;
export const Jest = require('../Assets/Images/jest.png').default;
export const Nextjs = require('../Assets/Images/nextjs.svg').default;
export const Heroku = require('../Assets/Images/heroku.svg').default;
export const Digital = require('../Assets/Images/digitalocean-2.svg').default;
export const ReactImage = require('../Assets/Images/react-2.svg').default;
export const Bootstrap = require('../Assets/Images/bootstrap-4.svg').default;
export const Java = require('../Assets/Images/java-4.svg').default;
export const JavaScript = require('../Assets/Images/typescript.svg').default;
export const Sass = require('../Assets/Images/node-sass.svg').default;
export const Swagger = require('../Assets/Images/swagger_logo.svg').default;
export const Light = require('../Assets/Images/lightning.png').default;
export const Contact = require('../Assets/Images/contact5.svg').default;
export const PG = require('../Assets/Images/postgresql.svg').default;
export const Spring = require('../Assets/Images/spring-3.svg').default;
export const Html = require('../Assets/Images/html5-2.svg').default;
export const Express = require('../Assets/Images/expressjs-ar21.svg').default;
export const Chakra = require('../Assets/Images/chakra.svg').default;
export const AWS = require('../Assets/Images/aws-2.svg').default;
export const VS = require('../Assets/Images/visual-studio-code-1.svg').default;
export const Adobe = require('../Assets/Images/adobe-xd-1.svg').default;
export const Figma = require('../Assets/Images/figma-1.svg').default;
export const Excel = require('../Assets/Images/excel-4.svg').default;
export const Postman = require('../Assets/Images/getpostman-icon.svg').default;
export const Intel = require('../Assets/Images/intellijidea.svg').default;
export const Meister = require('../Assets/Images/meister.png').default;
export const Meister2 = require('../Assets/Images/meister2.png').default;
export const Wix = require('../Assets/Images/wix.svg').default;
export const Webpack = require('../Assets/Images/webpack.svg').default;
export const Flutter = require('../Assets/Images/flutter-logo.svg').default;
export const Material = require('../Assets/Images/materializecss.svg').default;
export const Blaze = require('../Assets/Images/projects/blaze1.png').default;
export const Cedi = require('../Assets/Images/projects/cedi1.png').default;
export const Cedi2 = require('../Assets/Images/projects/cedi2.png').default;
export const Covid = require('../Assets/Images/projects/covid.png').default;
export const Gallery =
    require('../Assets/Images/projects/gallery2.png').default;
export const Hazegen =
    require('../Assets/Images/projects/hazegen1.png').default;
export const Medical =
    require('../Assets/Images/projects/medical1.png').default;
export const Portfolio = require('../Assets/Images/projects/portf.png').default;
export const Weather =
    require('../Assets/Images/projects/weather1.png').default;
export const WixWeb = require('../Assets/Images/projects/wix.png').default;
export const TofieWeb = require('../Assets/Images/projects/tofie.png').default;
export const Spawn = require('../Assets/Images/projects/npm.png').default;
export const CediIcon = require('../Assets/Images/icons/cedis.png').default;
export const HazegenIcon = require('../Assets/Images/icons/code.png').default;
export const CovidIcon =
    require('../Assets/Images/icons/coronavirus.png').default;
export const GalleryIcon =
    require('../Assets/Images/icons/gallery.png').default;
export const GhanaIcon = require('../Assets/Images/icons/ghana.png').default;
export const TofieIcon = require('../Assets/Images/icons/house.png').default;
export const MedicIcon = require('../Assets/Images/icons/medicine.png').default;
export const SpawnIcon = require('../Assets/Images/icons/password.png').default;
export const RocketIcon = require('../Assets/Images/icons/rocket.png').default;
export const ShopIcon = require('../Assets/Images/icons/shop.png').default;

export const Languages = [
    { item: 'TypeScript', img: JavaScript },
    { item: 'Java', img: Java },
    { item: 'HTML5', img: Html },
    { item: 'CSS/SCSS', img: Sass },
    { item: 'Bootstrap', img: Bootstrap },
    { item: 'Chakra UI', img: Chakra },
    { item: 'Materialize Css', img: Material },
    { item: 'ReactJS', img: ReactImage },
    { item: 'Node Js(Express JS)', img: Express },
    { item: 'Java Springboot', img: Spring },
    { item: 'GraphQL', img: GraphQL },
    { item: 'Next JS', img: Nextjs },
    { item: 'Jest', img: Jest },
    { item: 'Flutter', img: Flutter },
    { item: 'PGSQL', img: PG },
    { item: 'MongoDB', img: MongoDB },
    { item: 'AWS', img: AWS },
    { item: 'Azure', img: Azure, type: 'extra' },
    { item: 'DigitalOcean', img: Digital },
    { item: 'Heroku', img: Heroku },
    { item: 'VS Code', img: VS },
    { item: 'Postman', img: Postman },
    { item: 'Figma', img: Figma },
    { item: 'IntelliJ', img: Intel, type: 'extra' },
    { item: 'WebPack', img: Webpack },
    { item: 'Swagger', img: Swagger },
    { item: 'Wix', img: Wix, type: 'extra' }
];

export const Projects = [
    {
        name: 'CediManager',
        type: 'Fullstack Web project',
        tech: ['React JS', 'Express JS', 'Bootstrap CSS', 'PGSQL', 'MongoDB'],
        desc: 'Cedimanager is a system that allows anyone to Buy Treasury Bills, Government Bonds and Government Notes in Ghana from the comfort of their homes.',
        note: '',
        img: Cedi,
        extraImg: Cedi2,
        url: 'https://app.cedimanager.com/',
        icon: CediIcon
    },
    {
        name: 'Blaze URL',
        type: 'Fullstack Web project',
        tech: ['React JS', 'Express JS', 'Chakra UI', 'MongoDB'],
        desc: 'Blaze URL is a web app that shorterns long URLs ',
        note: 'Has Light and Dark Themes',
        img: Blaze,
        url: 'https://blazeurl.hazelprojects.xyz/',
        icon: RocketIcon
    },
    {
        name: 'Medical Zone',
        type: 'Fullstack Web project',
        tech: ['React JS', 'Express JS', 'Bootstrap CSS', 'PGSQL', 'MongoDB'],
        desc: 'Medical Zone is a web app that helps manage the information related to health care and aids in the job completion of health care providers effectively',
        note: 'Just hit the login button, The passowrd and username have been hard coded for demonstration purposes',
        img: Medical,
        url: 'https://www.medicalzoneshowcase.xyz/',
        icon: MedicIcon
    },
    {
        name: 'Tofie Admin Backend',
        type: 'Backend project',
        tech: ['Java Spring', 'MongoDB'],
        desc: 'Tofie Admin Backend is the server side for a real estate system',
        note: '',
        img: TofieWeb,
        url: 'https://github.com/frederickhazel6996/tofie-backkend',
        icon: TofieIcon
    },
    {
        name: 'Ghana Tour Backend',
        type: 'Backend project',
        tech: ['Express JS'],
        desc: 'Ghana Tour API is a rest API that provides a list of all hotels in all the regions in Ghana',
        note: '',
        img: '',
        url: 'https://github.com/frederickhazel6996/Ghana-tour-backend',
        icon: GhanaIcon
    },
    {
        name: 'ShopDiya',
        type: 'FullStack Project with CMS',
        tech: ['Wix CMS', 'PayStack'],
        desc: 'This is an E commerce site I designed and built with Wix',
        note: '',
        img: WixWeb,
        url: 'https://www.shopdiyaorganics.com/',
        icon: ShopIcon
    },
    {
        name: 'HazeGen',
        type: 'Frontend Web project',
        tech: ['React JS', 'Bootstrap CSS', 'Animate CSS'],
        desc: 'This is a website i created for an imaginary business (HazeGen) using react',
        note: 'Purely Frontend. Login And Sign up buttons do not work',
        img: Hazegen,
        url: 'https://hazegen.hazelprojects.xyz/',
        icon: HazegenIcon
    },
    {
        name: 'Weather App',
        type: 'Frontend Web project',
        tech: ['React JS', 'Bootstrap CSS', 'OpenWeatherMap API'],
        desc: 'The Weather App is a web app that takes the name of a city and provides you with the weather conditions there',
        note: '',
        img: Weather,
        url: 'https://weatherapp.hazelprojects.xyz/',
        icon: Light
    },
    {
        name: 'Covid Map',
        type: 'Frontend Web project',
        tech: ['React JS', 'Bootstrap CSS'],
        desc: 'The Covid Map is a webapp that gives you an overview of all the covid cases in the world',
        note: '',
        img: Covid,
        url: 'https://www.shopdiyaorganics.com/',
        icon: CovidIcon
    },
    {
        name: 'Spawn Password',
        type: 'Javascript Library',
        tech: ['Vanilla JS'],
        desc: 'Spawn Password is a Javascript library that produces strings that can be used as passwords or IDs',
        note: '',
        img: Spawn,
        url: 'https://www.npmjs.com/package/spawn-password',
        icon: SpawnIcon
    },
    {
        name: 'Gallery',
        type: 'Frontend Web project',
        tech: ['HTML', 'Bootstrap CSS'],
        desc: 'This is a simple website i created to display pictures in a masonry view ',
        note: '',
        img: Gallery,
        url: 'https://gallery.hazelprojects.xyz/',
        icon: GalleryIcon
    }
];
