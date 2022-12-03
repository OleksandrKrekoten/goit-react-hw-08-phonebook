import { HeroSection, HeroDiscription } from './HomePage.styled';

export const HomePage = () => {
    return (
        <HeroSection>
            <div>
                <img
                    src="https://ik.imagekit.io/dqs5dhaf3/how-to-restore-deleted-contacts-on-android-removebg-preview__1__6sUJfrgZe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670074156287"
                    alt="phone "
                />
            </div>
            <HeroDiscription>
                <h3>Welcome to PhoneBook</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis dolorum consectetur eos, velit distinctio, commodi,
                    perferendis incidunt tempora pariatur corrupti veritatis ad
                    perspiciatis rerum adipisci neque. Debitis sequi laudantium
                    maiores.
                </p>
            </HeroDiscription   >
        </HeroSection>
    );
};
