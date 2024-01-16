"use client";

import React, { useState } from "react";
import Button from "./Button";
import dynamic from "next/dynamic";

const CompanyFormModal = dynamic(() => import("./CompanyFormModal"), {
  ssr: false,
});

const AddCompanyButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Add company</Button>
      <CompanyFormModal
        onClose={() => setIsOpen(false)}
        onSubmit={console.log}
        show={isOpen}
      />
    </>
  );
};

export default AddCompanyButton;
