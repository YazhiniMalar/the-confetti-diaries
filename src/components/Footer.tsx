const Footer = () => (
  <footer className="bg-foreground py-12 text-center">
    <p className="text-display text-lg font-semibold tracking-[0.15em] text-primary-foreground">
      THE CONFETI DIARIES
    </p>
    <p className="text-sans mt-3 text-xs tracking-wider text-primary-foreground/60">
      © {new Date().getFullYear()} The Confeti Diaries. All rights reserved.
    </p>
  </footer>
);

export default Footer;
