import { useContext, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import { ResourceContext } from "../../../../context/ResourceContext";
import { createResource } from "../../../../api/resource";
import { zodResource } from "./zodResource";
import FormInput from "../../../reusable-ui/FormInput";
import Button from "../../../reusable-ui/Button";
import Modal from "../../../reusable-ui/Modal";
import type { ResourceType } from "../../../../types/resource";

export default function FormResource() {
  const { setResource } = useContext(ResourceContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const form = useForm<ResourceType>({
    resolver: zodResolver(zodResource),
  });

  const onSubmit = async (data: ResourceType) => {
    try {
      await createResource(data, 12);
      setResource((prev) => [data, ...prev]);
      setIsModalOpen(false);
    } catch (err) {
      console.error("Erreur API:", err);
    }
  };

  return (
    <FormResourceStyled>
      <button className="open-button" onClick={() => setIsModalOpen(true)}>
        <IoAddCircleOutline size={28} />
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormInput
            type="text"
            placeholder="Titre"
            error={form.formState.errors.title}
            registration={form.register("title")}
          />
          <FormInput
            type="text"
            placeholder="Description"
            error={form.formState.errors.description}
            registration={form.register("description")}
          />
          <FormInput
            type="date"
            error={form.formState.errors.date}
            registration={form.register("date")}
          />
          <FormInput
            type="text"
            placeholder="Capacité"
            error={form.formState.errors.capacity}
            registration={form.register("capacity", { valueAsNumber: true })}
          />
          <Button label="Valider" disabled={form.formState.isSubmitting} />
        </form>
      </Modal>
    </FormResourceStyled>
  );
}

const FormResourceStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .open-button {
    border: none;
    border-radius: 50%;
    background: linear-gradient(135deg, #4f46e5, #6366f1);
    color: white;
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: 0.2s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.95);
    }
  }
`;
