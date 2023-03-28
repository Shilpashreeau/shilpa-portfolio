import React from "react";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <div>
      <Link href="https://github.com/Shilpashreeau" color="inherit">
        <GitHub />
      </Link>
      <Link href="https://www.linkedin.com/in/shilpashree1" color="inherit">
        <LinkedIn />
      </Link>
      <Link href="/contact" color="inherit">
        <Email />
      </Link>
    </div>
  );
}
export default Footer;
