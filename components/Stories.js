import StoryCard from './StoryCard';

const stories = [
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
        name: "BebiiiLa",
        src: "/images/users/ayoub_hakkam.jpg",
        profile: "/images/avatars/ayoub_hakkam.jpg"
    },
    {
        name: "Banana",
        src: "/images/users/samir_lakhsam.jpg",
        profile: "/images/avatars/samir_lakhssam.jpg"
    },
    {
        name: "Denzel Washington",
        src: "/images/users/denzel_washington.jpg",
        profile: "/images/avatars/denzel_washington.jpg"
    },

];

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => (
                <StoryCard key={story.src} name={story.name}
                src={story.src} profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories
