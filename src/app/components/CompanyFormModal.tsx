"use client";

import Modal, { ModalProps } from "./Modal";
import CompanyForm, { CompanyFormProps } from "./CompanyForm";

interface ICompanyFormModalProps extends ModalProps {
  onSubmit: CompanyFormProps["onSubmit"];
}

export default function CompanyFormModal({
  onClose,
  ...rest
}: ICompanyFormModalProps) {
  return (
    <Modal {...rest} onClose={onClose}>
      <CompanyForm onSubmit={() => onClose()} />
    </Modal>
  );
}
