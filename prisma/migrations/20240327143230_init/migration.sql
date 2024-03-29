-- CreateTable
CREATE TABLE "SujetAnnee" (
    "id_sujet" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "image" TEXT[],
    "description" TEXT,
    "autres" TEXT,

    CONSTRAINT "SujetAnnee_pkey" PRIMARY KEY ("id_sujet")
);

-- CreateTable
CREATE TABLE "Utilisateur" (
    "id_utilisateur" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "motDePasse" TEXT NOT NULL,
    "photo" TEXT,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id_utilisateur")
);

-- CreateTable
CREATE TABLE "DaysThirty" (
    "id_days" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "days" TEXT,
    "contenu" TEXT,
    "bible" TEXT,
    "references" TEXT,
    "priere" TEXT,
    "autres" TEXT,
    "image" TEXT[],
    "id_sujet" TEXT NOT NULL,

    CONSTRAINT "DaysThirty_pkey" PRIMARY KEY ("id_days")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- AddForeignKey
ALTER TABLE "DaysThirty" ADD CONSTRAINT "DaysThirty_id_sujet_fkey" FOREIGN KEY ("id_sujet") REFERENCES "SujetAnnee"("id_sujet") ON DELETE RESTRICT ON UPDATE CASCADE;
