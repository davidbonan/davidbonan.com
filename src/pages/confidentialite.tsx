import * as React from "react";
import MainTitle from "../components/MainTitle";
import MainSubtitle from "../components/MainSubtitle";
import Title from "../components/Title";
import { withLayout } from "../components/Layout";

const ConfidentialitePage = () => (
  <div>
      <MainTitle>Engagement de confidentialité</MainTitle>
      <MainSubtitle>L’Engagement de confidentialité Benef'Indep a été mis à jour le 1 Juin 2021.</MainSubtitle>
      <p>
        La protection de votre vie privée est importante pour nous. Le présent engagement de confidentialité a pour but de vous expliquer de manière
        transparente comment nous collectons, utilisons, divulguons, transférons et conservons vos données.
      </p>
      <Title  size="small">Collecte et utilisation des données à caractère personnel</Title>
      <p>
        Aucune données n'est collectées.
      </p>
  </div>
);

export default withLayout(ConfidentialitePage);