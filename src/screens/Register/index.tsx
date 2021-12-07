import React, { useState } from "react";

import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";

import {
  Container,
  Form,
  Header,
  Title,
  Fields,
  TransactionsTypes,
} from "./styles";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";

export function Register() {
  const [transactionType, setTransactionType] = useState("");

  function handlesetTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />

          <TransactionsTypes>
            <TransactionTypeButton
              type="up"
              title="Income"
              onPress={() => handlesetTransactionTypeSelect("up")}
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              type="down"
              title="Outcome"
              onPress={() => handlesetTransactionTypeSelect("down")}
              isActive={transactionType === "down"}
            />
          </TransactionsTypes>

          <Input placeholder="Preço" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
