import React from "react";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <div className="footer">
      <Link target="_blank" href="https://github.com/Shilpashreeau">
        <GitHub />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/in/shilpashree1">
        <LinkedIn />
      </Link>
      <Link target="_blank" href="/contact">
        <Email />
      </Link>
      <p id="copyright"><span id="at">&copy;</span>shilpashreehebbar@gmail.com </p>
    </div>
  );
}
export default Footer;
