function Profile() {
    return (
        <img
            src="https://i.imgur.com/lICfvbD.jpg"
            alt="Aklilu Lemma"
        />
    );
}

export default function Gallery() {
    return (
        <section>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
};