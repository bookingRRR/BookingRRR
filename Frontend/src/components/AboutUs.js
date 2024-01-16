import "./styles/aboutUsStyles.css";

function Hero() {
  return (
    <section className="hero-section" id="aboutUs-section">
      <div className="hero-container">
        <p className="aboutUs">
          BooKing was born with a dream to create a platform where college folks
          could not only buy and sell books but also take a step towards
          sustainability. At BooKing, we encourage the use of second hand books
          by connecting buyers and sellers to reduce the massive paper
          consumption happening at college level.
        </p>
        <br />
        <p className="mission">
          More than 150,000 students study at Delhi University each year. If, on
          an average, a student uses 6 books per semester, imagine the number of
          new books and readings being printed for them every year - the number
          must be terrifying! That is why, we have come up with a solution to
          reduce the consumption of paper by providing an online platform to
          connect buyers and sellers of second hand books. Our motto ‘Read.
          Resell. Repeat.’ aims to encourage you to utilize your course books in
          a sustainable manner, make them accessible for the juniors by listing
          them on our platform and give pre-loved books a second life. Together,
          we can make a difference—one book at a time!
        </p>
      </div>
    </section>
  );
}

export default Hero;
