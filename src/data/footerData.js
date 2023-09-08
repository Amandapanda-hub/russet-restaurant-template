import {BsYelp, BsGithub} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'

const footerData = [
    {
        header: "Denver",
        info: [
            "123 Demo Street, City, CO 12345", 
            "(555) 555-5555", 
            "Monday - Sunday,10am - 10pm"
        ]
    },
    {
        header: "Castle Rock",
        info: [
            "123 Demo Street, City, CO 12345", 
            "(555) 555-5555", 
            "Monday - Sunday,10am - 10pm"
        ]
    },
    {
        header: "Food Truck",
        info: [
            "123 Demo Street, City, CO 12345", 
            "(555) 555-5555", 
            "Monday - Sunday,10am - 10pm"
        ]
    },
    {
        info: [
            {
                type: 'icons',
                content: [BsYelp, BsGithub, FaFacebook]
            },
          
          {
            type: 'link',
            text: 'Visit our site',
            url: 'https://example.com'
          }
        ]
      }, 
];

export default footerData;
