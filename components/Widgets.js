import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Contact from './Contact';

const contacts = [
    {
        name: "Mr.Kouhadi",
        src: "/images/users/bakr_kouhadi.jpg",
        profile: "/images/avatars/bakr_kouhadi.jpg"
    },
    {
        name: "Hamza Mouiret",
        src: "/images/users/hamza_muiret.jpg",
        profile: "/images/avatars/hamza_muiret.jpg"
    },
    {
        name: "Ayoub BebiiiLa",
        src: "/images/users/ayoub_hakkam.jpg",
        profile: "/images/avatars/ayoub_hakkam.jpg"
    },
    {
        name: "Samir Lakhssam",
        src: "/images/users/samir_lakhsam.jpg",
        profile: "/images/avatars/samir_lakhssam.jpg"
    },
    {
        name: "Denzel Washington",
        src: "/images/users/denzel_washington.jpg",
        profile: "/images/avatars/denzel_washington.jpg"
    },

];

function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>

            {contacts.map((contact) => (
                <Contact key={contact.profile} src={contact.profile} name={contact.name}/>
            ))}
        </div>
    );
}

export default Widgets