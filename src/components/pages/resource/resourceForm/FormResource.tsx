import { useContext, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import styled from "styled-components";
import type { ResourceType } from "../../../../types/resource";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { zodResource } from "./zodResource";
import FormInput from "../../../reusable-ui/FormInput";
import Button from "../../../reusable-ui/Button";
import { ResourceContext } from "../../../../context/ResourceContext";
import { createResource } from "../../../../api/resource";

export default function FormResource() {
  const { setResource } = useContext(ResourceContext);
  const [isForm, setIsForm] = useState(false);
  const form = useForm<ResourceType>({
    resolver: zodResolver(zodResource),
  });

  const onSubmit = async (data: ResourceType) => {
    try {
      await createResource(data, 12);
      setResource((prev) => [data, ...prev]);
    } catch (err) {
      console.error("Erreur API:", err);
    }
  };

  return (
    <FormResourceStyled>
      <div className="open-button">
        <button type="button" onClick={() => setIsForm(true)}>
          <IoAddCircleOutline />
        </button>
      </div>

      {isForm && (
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormInput
            type="text"
            placeholder="Titre"
            error={form.formState.errors.title}
            registration={form.register("title")}
          />

          <label>
            Type :
            <select {...form.register("type")}>
              <option value="EVENT">Événement</option>
              <option value="ROOM">Salle</option>
              <option value="OPENSPACE">Open Space</option>
              <option value="OFFICE">Bureau</option>
            </select>
          </label>
          {form.formState.errors.type && (
            <p>{form.formState.errors.type.message}</p>
          )}

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

          <label>
            Disponibilité :
            <select
              {...form.register("availability", {
                setValueAs: (val) => val === "true",
              })}
            >
              <option value="true">Disponible</option>
              <option value="false">Indisponible</option>
            </select>
          </label>
          {form.formState.errors.availability && (
            <p>{form.formState.errors.availability.message}</p>
          )}

          <Button label="Valider" disabled={form.formState.isSubmitting} />
        </form>
      )}
    </FormResourceStyled>
  );
}

const FormResourceStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 20px;
    width: 100%;
    max-width: 400px;

    label {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      font-weight: 500;

      select {
        margin-top: 4px;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 6px;
        background: white;
        font-size: 14px;

        &:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.3);
        }
      }

      p {
        color: red;
        font-size: 12px;
      }
    }
  }

  .open-button {
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: none;
      background: linear-gradient(135deg, #4f46e5, #6366f1);
      color: white;
      font-size: 28px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
        background: linear-gradient(135deg, #4338ca, #4f46e5);
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
      }

      &:active {
        transform: scale(0.95);
      }

      svg {
        width: 28px;
        height: 28px;
      }
    }
  }
`;
