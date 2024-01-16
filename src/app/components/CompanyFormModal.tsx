"use client";

import Modal, { ModalProps } from "./Modal";
import CompanyForm from "./CompanyForm";

export default function CompanyFormModal({ onClose, ...rest }: ModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => onClose()} />
    </Modal>
  );
}
