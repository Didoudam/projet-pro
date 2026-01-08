import { SearchBar } from "@/components/SearchBar";

export default function SearchPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 border-b-4 border-black inline-block">
          RECHERCHE
        </h1>
        <p className="text-sm mt-4">
          Recherchez des personnes par nom ou profession, des entreprises par nom
          ou secteur d&apos;activité.
        </p>
      </div>

      <SearchBar />

      <div className="mt-8 border-2 border-black p-6">
        <h2 className="text-xs font-bold mb-4">CONSEILS DE RECHERCHE</h2>
        <ul className="space-y-2 text-xs">
          <li className="flex items-start gap-2">
            <span className="font-bold">•</span>
            <span>
              Utilisez le filtre pour cibler votre recherche (Personnes ou
              Entreprises)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">•</span>
            <span>
              La recherche est tolérante aux fautes de frappe
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">•</span>
            <span>
              Les résultats apparaissent en temps réel pendant que vous tapez
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">•</span>
            <span>
              Recherchez par profession (ex: &quot;développeur&quot;, &quot;designer&quot;)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">•</span>
            <span>
              Recherchez par secteur d&apos;activité (ex: &quot;tech&quot;, &quot;finance&quot;)
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
