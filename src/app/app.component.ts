import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplashComponent } from './components/splash/splash.component';
import { ItemList } from './models/item-list';
import { CardListComponent } from './components/card-list/card-list.component';
import { faJava, faJs } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SplashComponent, CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  itemLists: ItemList[] = [
    {
      id: '1',
      title: "Programing Languages",
      aspectRatio: '1x1',
      style: 'full',
      items: [
        {
          id: '123',
          name: 'Javascript',
          backgroundSolid: '#ffb75e',
          background: 'linear-gradient(to right, #ffb75e, #ed8f03)',
          image: "https://res.cloudinary.com/devemg/image/upload/v1728361329/js-icon_wjxyyk.svg",
        },
        {
          id: '789',
          name: 'Typescript',
          backgroundSolid: '#0575e6',
          background: 'linear-gradient(to right, #0575e6, #021b79)',
          image: "https://res.cloudinary.com/devemg/image/upload/v1728360883/my-portfolio/icons/em-typescript_o6d9zn.svg",
        },
        {
          id: '1213',
          name: 'C#',
          backgroundSolid: '#6a3093',
          background: 'linear-gradient(to right, #6a3093, #a044ff)',
          image: "https://res.cloudinary.com/devemg/image/upload/v1728367186/my-portfolio/icons/small/mdi_csharp_fouszh.svg",
        },
        {
          id: '1415',
          name: 'C++',
          backgroundSolid: '#642b73',
          background: 'linear-gradient(to right, #642b73, #c6426e)',
          image: "https://res.cloudinary.com/devemg/image/upload/v1728366968/my-portfolio/icons/small/mdi_cplusplus_a089mb.svg",
        },
        {
          id: '1011',
          name: 'Java',
          backgroundSolid: '#d31027',
          background: 'linear-gradient(to right, #d31027, #ea384d)',
          image: "https://res.cloudinary.com/devemg/image/upload/v1728361137/my-portfolio/icons/ri_java-fill_mcylfs.svg",
        },
        // {
        //   id: '123',
        //   name: 'Python',
        //   backgroundSolid: '#06beb6',
        //   background: 'linear-gradient(to right, #06beb6, #48b1bf)',
        //   image: faPython,
        // },
      ]
    },
    {
      id: '234',
      title: "Frameworks and Libraries",
      aspectRatio: '16x9',
      style: 'centered',
      items: [
        {
          id: '1',
          name: "Angular",
          backgroundSolid: '#c3002f',
          image: 'https://res.cloudinary.com/devemg/image/upload/v1728362283/my-portfolio/icons/small/mdi_angular_q2cwko.svg'
        },
        {
          id: '2',
          name: "React",
          backgroundSolid: 'rgb(88 196 220/1)',
          image: 'https://res.cloudinary.com/devemg/image/upload/v1728362283/my-portfolio/icons/small/mdi_react_z9ia3d.svg'
        },
        {
          id: '3',
          name: "Preact",
          backgroundSolid: '#673ab8',
          image: 'https://res.cloudinary.com/devemg/image/upload/v1728362282/my-portfolio/icons/small/mdi_preact_jl7ra5.svg'
        },
        {
          id: '4',
          name: "JQuery",
          backgroundSolid: '#0769ad',
          image: 'https://res.cloudinary.com/devemg/image/upload/v1728362458/my-portfolio/icons/small/mdi_jquery_eln2sa.svg'
        },
        {
          id: '5',
          name: "Ionic",
          backgroundSolid: '#176BFF',
          image: 'https://res.cloudinary.com/devemg/image/upload/v1728362458/my-portfolio/icons/small/mdi_ionic_ttrjlu.svg'
        },
        {
          id: '6',
          name: "Express",
          backgroundSolid: 'rgb(90 90 90)',
          image: 'https://res.cloudinary.com/devemg/image/upload/v1728362678/my-portfolio/icons/small/mdi_express_uc0v7d.svg'
        },
        {
          id: '7',
          name: ".NET",
          backgroundSolid: '#ac99ea',
          image: 'https://res.cloudinary.com/devemg/image/upload/v1728362459/my-portfolio/icons/small/mdi_dotnet_qntwfa.svg'
        },
      ]
    },
    {
      id: '3',
      title: "Cloud",
      aspectRatio: '2x3',
      style: 'centered',
      items: [
        {
          id: '1',
          name: 'AWS',
          image: 'https://res.cloudinary.com/devemg/image/upload/v1728365485/my-portfolio/icons/small/mdi_aws_ouutns.svg',
          backgroundSolid: '#252F3E',
        },
        {
          id: '2',
          name: 'Google Cloud',
          image: 'https://res.cloudinary.com/devemg/image/upload/v1728365485/my-portfolio/icons/small/mdi_googlecloud_l3nthb.svg',
          backgroundSolid: 'rgb(88 88 88)',
        },
        {
          id: '3',
          name: 'Digital Ocean',
          image: 'https://res.cloudinary.com/devemg/image/upload/v1728365484/my-portfolio/icons/small/mdi_digital-ocean_ue0mwo.svg',
          backgroundSolid: 'rgb(243 243 243)',
        },
        {
          id: '4',
          name: 'Azure',
          image: 'https://res.cloudinary.com/devemg/image/upload/v1728365484/my-portfolio/icons/small/mdi_azure_w5sefp.svg',
          backgroundSolid: 'rgb(243 243 243)',
        }
      ]
    }
  ];
}
